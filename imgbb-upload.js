// imgbb-upload.js - DeepBuild
// Uploads an image to imgbb and returns its public URL.

// Paste your imgbb API key here (get it at https://api.imgbb.com/)
const IMGBB_API_KEY = "dfaaa5e23758aefce7dbcf93a3edb304";

const MAX_MB = 8;

export async function uploadToImgbb(file) {
  if (IMGBB_API_KEY.startsWith("PASTE_")) {
    throw new Error("imgbb API key is missing in imgbb-upload.js");
  }
  if (!file.type.startsWith("image/")) {
    throw new Error("Please choose an image file.");
  }
  if (file.size > MAX_MB * 1024 * 1024) {
    throw new Error("Image is larger than " + MAX_MB + " MB.");
  }
  const form = new FormData();
  form.append("image", file);
  const res = await fetch("https://api.imgbb.com/1/upload?key=" + encodeURIComponent(IMGBB_API_KEY), {
    method: "POST",
    body: form
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json?.error?.message || "Upload failed.");
  }
  return json.data.url;
}

// Backup when imgbb is down: shrink the image and return it as a data: URL (stored directly in the database).
async function toSmallDataUrl(file, maxDim = 900, maxLen = 140000) {
  const img = await new Promise((ok, no) => {
    const i = new Image(); i.onload = () => ok(i); i.onerror = () => no(new Error("Could not read this image."));
    i.src = URL.createObjectURL(file);
  });
  const k = Math.min(1, maxDim / Math.max(img.width, img.height));
  const cv = document.createElement("canvas");
  cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
  cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
  for (let q = 0.75; q >= 0.3; q -= 0.1) {
    const d = cv.toDataURL("image/jpeg", q);
    if (d.length < maxLen) return d;
  }
  throw new Error("Image is too large. Please choose a smaller one.");
}

// Connects a file input to a URL input, with status text and preview.
export function attachImgbbUploader({ fileInputId, urlInputId, statusId, previewId, onStart, onDone }) {
  const fileEl = document.getElementById(fileInputId);
  const urlEl = document.getElementById(urlInputId);
  const statusEl = document.getElementById(statusId);
  const previewEl = document.getElementById(previewId);

  function showPreview(url) {
    previewEl.src = url || "";
    previewEl.hidden = !url;
  }
  urlEl.addEventListener("input", () => showPreview(urlEl.value.trim()));

  fileEl.addEventListener("change", async () => {
    const file = fileEl.files[0];
    if (!file) return;
    statusEl.textContent = "Uploading...";
    statusEl.style.color = "";
    onStart && onStart();
    try {
      let url, backup = false;
      try { url = await uploadToImgbb(file); }
      catch (e1) { url = await toSmallDataUrl(file); backup = true; }
      urlEl.value = url;
      showPreview(url);
      statusEl.textContent = backup ? "Uploaded (backup storage, imgbb is unavailable)." : "Uploaded.";
    } catch (err) {
      statusEl.textContent = err.message;
      statusEl.style.color = "var(--red)";
    }
    fileEl.value = "";
    onDone && onDone();
  });

  return { showPreview };
}
