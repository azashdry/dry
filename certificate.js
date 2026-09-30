// certificate.js - DeepBuild
// Issues a verifiable certificate (saved in Firestore) and draws it as a PNG.
import { db } from "./firebase.js";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const newId = () => "DB-" + new Date().getFullYear() + "-" +
  Array.from(crypto.getRandomValues(new Uint8Array(6)), b => CHARS[b % CHARS.length]).join("");

// verify.html sits next to index.html, on whatever address the site is hosted.
export const verifyUrl = id => new URL("verify.html?id=" + encodeURIComponent(id), location.href).href;

function fmtDate(d) { return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }

// Returns { id, name, course, date, instructor }. Re-uses the certificate if one was already issued.
export async function issueCertificate(user, enr, course) {
  const enrRef = doc(db, "enrollments", user.uid + "_" + course.id);
  let id = enr.certId, data;
  if (id) {
    const s = await getDoc(doc(db, "certificates", id));
    if (s.exists()) data = s.data();
  }
  if (!data) {
    id = newId();
    data = { uid: user.uid, name: user.displayName || user.email, courseId: course.id,
      courseTitle: course.title, instructor: course.instructor || "", dateText: fmtDate(new Date()),
      issuedAt: serverTimestamp() };
    await setDoc(doc(db, "certificates", id), data);
    await updateDoc(enrRef, { certId: id });
    enr.certId = id;
  }
  return { id, name: data.name, course: data.courseTitle, date: data.dateText, instructor: data.instructor };
}

function loadQr() {
  return window.qrcode ? Promise.resolve() : new Promise((ok, no) => {
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
    s.onload = ok; s.onerror = no; document.head.appendChild(s);
  });
}

function fit(ctx, text, weight, size, max) {
  for (; size > 20; size -= 2) { ctx.font = weight + " " + size + "px Inter,system-ui,sans-serif"; if (ctx.measureText(text).width <= max) break; }
  return size;
}
function diamond(ctx, cx, cy, r) { ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r, cy); ctx.lineTo(cx, cy + r); ctx.lineTo(cx - r, cy); ctx.closePath(); }

export async function drawCertificate(c) {
  await loadQr();
  const cv = document.createElement("canvas"); cv.width = 2400; cv.height = 1700;
  const x = cv.getContext("2d"); x.scale(2, 2);
  const F = "Inter,system-ui,sans-serif";
  x.fillStyle = "#070c1a"; x.fillRect(0, 0, 1200, 850);
  const g = x.createRadialGradient(1050, 760, 0, 1050, 760, 350);
  g.addColorStop(0, "rgba(31,92,255,.35)"); g.addColorStop(1, "rgba(31,92,255,0)");
  x.fillStyle = g; x.fillRect(0, 0, 1200, 850);
  x.strokeStyle = "#1f5cff"; x.lineJoin = "round";
  [[357, 1, 1.2], [266, .55, 1.2], [175, .3, 1.2]].forEach(([r, a, w]) => { x.globalAlpha = a; x.lineWidth = w * 1.6; diamond(x, 1030, 230, r); x.stroke(); });
  x.globalAlpha = 1;
  // logo
  x.save(); x.translate(84, 78); x.scale(.4, .4); x.strokeStyle = "#5c8bff"; x.lineWidth = 9; x.lineCap = "round";
  diamond(x, 50, 50, 44); x.stroke(); x.beginPath(); x.moveTo(40, 36); x.lineTo(26, 50); x.lineTo(40, 64); x.moveTo(60, 36); x.lineTo(74, 50); x.lineTo(60, 64); x.stroke(); x.restore();
  x.textBaseline = "alphabetic"; x.font = "700 28px " + F; x.fillStyle = "#fff"; x.fillText("Deep", 136, 108);
  let w = x.measureText("Deep").width; x.fillStyle = "#5c8bff"; x.fillText("build", 136 + w, 108);
  w += x.measureText("build").width; x.fillStyle = "#fff"; x.fillText(".ai", 136 + w, 108);
  // tag
  x.font = "500 16px " + F; const tw = x.measureText("Certificate of completion").width + 36;
  x.strokeStyle = "#2a3a63"; x.lineWidth = 1; x.beginPath(); x.roundRect(1116 - tw, 80, tw, 38, 19); x.stroke();
  x.fillStyle = "#9fb0d6"; x.fillText("Certificate of completion", 1116 - tw + 18, 105);
  // text
  x.fillStyle = "#9fb0d6"; x.font = "500 30px " + F; x.fillText("This certifies that", 84, 268);
  x.fillStyle = "#fff"; let s = fit(x, c.name, 800, 104, 900); x.fillText(c.name, 84, 268 + 20 + s * .85);
  x.fillStyle = "#9fb0d6"; x.font = "400 22px " + F; x.fillText("completed every lesson in", 84, 470);
  x.fillStyle = "#fff"; fit(x, c.course, 700, 44, 820); x.fillText(c.course, 84, 526);
  x.fillStyle = "#1f5cff"; x.beginPath(); x.roundRect(84, 556, 96, 6, 3); x.fill();
  // footer meta
  let mx = 84;
  [[c.date, "Date issued"], [c.id, "Certificate ID"], c.instructor ? [c.instructor, "Instructor"] : null].filter(Boolean).forEach(([v, l]) => {
    x.font = "600 20px " + F; x.fillStyle = "#fff"; x.fillText(v, mx, 742);
    x.font = "400 14px " + F; x.fillStyle = "#7f92bd"; x.fillText(l, mx, 768);
    mx += Math.max(x.measureText(l).width, (x.font = "600 20px " + F, x.measureText(v).width)) + 56;
  });
  // QR
  x.fillStyle = "#fff"; x.beginPath(); x.roundRect(968, 592, 148, 178, 18); x.fill();
  const q = qrcode(0, "M"); q.addData(verifyUrl(c.id)); q.make();
  const n = q.getModuleCount(), m = 124 / n; x.fillStyle = "#070c1a";
  for (let r = 0; r < n; r++) for (let k = 0; k < n; k++) if (q.isDark(r, k)) x.fillRect(980 + k * m, 604 + r * m, m + .3, m + .3);
  x.font = "600 11px " + F; x.textAlign = "center"; x.fillText("Scan to verify", 1042, 758); x.textAlign = "left";
  return cv;
}

export async function downloadCertificate(c) {
  const cv = await drawCertificate(c);
  const a = document.createElement("a");
  a.href = cv.toDataURL("image/png"); a.download = "DeepBuild-Certificate-" + c.id + ".png"; a.click();
}
