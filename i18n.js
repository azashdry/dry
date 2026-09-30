// i18n.js - DeepBuild
// English / Hausa switcher. English text in the HTML and JS is the source;
// this file translates exact strings to Hausa, including text added later.

const D = {
  // ---- shared / site ----
  "Sign in": "Shiga", "Sign out": "Fita", "Sign up": "Yi rajista", "Log in": "Shiga",
  "Start learning free": "Fara koyo kyauta",
  "Courses": "Kwasa-kwasai", "Users": "Masu amfani", "Tools": "Kayan aiki", "AI Tools": "Kayan AI",
  "Community": "Al'umma", "Home": "Gida", "Settings": "Saituna", "Admins": "Masu gudanarwa",
  "Build your future with": "Gina makomarka da",
  "World-class AI education and a community built for African youth ready to lead the future. Start free today.":
    "Ilimin AI na matakin duniya da al'umma da aka gina domin matasan Afirka da ke shirin jagorantar gaba. Fara kyauta yau.",
  "Search courses": "Nemo kwasa-kwasai", "All categories": "Duk rukunoni",
  "AI & ML": "AI da ML", "Python": "Python", "Data Science": "Kimiyyar Bayanai", "General": "Gama-gari",
  "Loading courses...": "Ana ɗora kwasa-kwasai...", "Loading tools...": "Ana ɗora kayan aiki...",
  "Full name": "Cikakken suna", "Email": "Email", "Password": "Kalmar sirri",
  "Create account": "Buɗe asusu", "Forgot password?": "Ka manta kalmar sirri?",
  "Show": "Nuna", "Hide": "Ɓoye", "Close": "Rufe", "Show or hide password": "Nuna ko ɓoye kalmar sirri",
  "WhatsApp Community": "Al'ummar WhatsApp",
  "Connect, learn and grow together with other developers and creators. Instant updates, project sharing and direct mentor access.":
    "Ku haɗu, ku koya, ku girma tare da sauran masu haɓaka manhaja da masu ƙirƙira. Sabbin labarai nan take, raba ayyuka da kai tsaye zuwa ga malamai.",
  "Coming soon": "Yana zuwa nan ba da daɗewa ba", "Join WhatsApp": "Shiga WhatsApp",
  "View course": "Duba kwas", "Free": "Kyauta",
  "Beginner": "Mafari", "Intermediate": "Matsakaici", "Advanced": "Mai ci gaba",
  "No courses match your search.": "Babu kwas da ya dace da binciken ka.",
  "No courses yet. Check back soon.": "Babu kwasa-kwasai tukuna. Ka sake dubawa nan ba da daɗewa ba.",
  "Could not load courses. Please try again later.": "Ba a iya ɗora kwasa-kwasai ba. Ka sake gwadawa daga baya.",
  "Sign in to enroll": "Shiga domin yin rajista", "Checking...": "Ana dubawa...",
  "Enrolled": "An yi rajista", "Enroll for free": "Yi rajista kyauta",
  "Paid courses are coming soon.": "Kwasa-kwasan biya suna zuwa nan ba da daɗewa ba.",
  "Lessons are coming soon.": "Darussa suna zuwa nan ba da daɗewa ba.",
  "AI tools are coming soon.": "Kayan AI suna zuwa nan ba da daɗewa ba.",
  "Could not load tools.": "Ba a iya ɗora kayan aiki ba.",
  "Live": "Yana aiki", "Beta": "Beta", "Open": "Buɗe",
  "Could not enroll: ": "Ba a iya yin rajista ba: ",
  "Could not check enrollment: ": "Ba a iya duba rajista ba: ",
  "Could not load lessons: ": "Ba a iya ɗora darussa ba: ",
  // ---- auth messages ----
  "This email already has an account. Try logging in.": "Wannan email yana da asusu. Gwada shiga.",
  "Incorrect email or password.": "Email ko kalmar sirri ba daidai ba ne.",
  "Enter a valid email address.": "Rubuta email mai inganci.",
  "Password must be at least 6 characters.": "Kalmar sirri dole ta kai haruffa 6 ko fiye.",
  "Too many attempts. Please wait and try again.": "An yi ƙoƙari da yawa. Ka jira ka sake gwadawa.",
  "Network error. Check your connection.": "Matsalar hanyar sadarwa. Duba haɗin intanet ɗinka.",
  "Enter your full name.": "Rubuta cikakken sunanka.",
  "Enter your email above first.": "Fara rubuta email ɗinka a sama.",
  "If an account exists for this email, a reset link has been sent. Check your inbox and spam folder.":
    "Idan akwai asusu da wannan email, an aika hanyar sake saita kalmar sirri. Duba akwatin saƙonka da Spam.",
  "Could not send the reset email. Try again.": "Ba a iya aika email ɗin sake saitawa ba. Sake gwadawa.",
  // ---- admin ----
  "Sign in with your admin account.": "Shiga da asusun gudanarwarka.",
  "Signing in...": "Ana shiga...",
  "This account is not an admin.": "Wannan asusun ba na mai gudanarwa ba ne.",
  "Could not verify admin access: ": "Ba a iya tabbatar da damar gudanarwa ba: ",
  "Add course": "Ƙara kwas", "Edit course": "Gyara kwas",
  "No courses yet. Click \"Add course\" to create your first one.":
    "Babu kwasa-kwasai tukuna. Danna \"Ƙara kwas\" domin ƙirƙirar na farko.",
  "Search by name or email": "Nemo da suna ko email",
  "Title": "Take", "Instructor": "Malami", "Description": "Bayani", "Category": "Rukuni", "Level": "Mataki",
  "Cover image (optional)": "Hoton bango (ba dole ba)", "Or paste an image URL": "Ko ka manna link ɗin hoto",
  "Free course": "Kwas na kyauta", "Price (USD)": "Farashi (USD)",
  "Published (visible to learners)": "An buga (masu koyo za su gani)",
  "Cancel": "Soke", "Save course": "Ajiye kwas",
  "Publish": "Buga", "Unpublish": "Ɓoye", "Delete": "Goge", "Edit": "Gyara",
  "Published": "An buga", "Draft": "Daftari", "Lessons": "Darussa",
  "Course unpublished": "An ɓoye kwas ɗin", "Course published": "An buga kwas ɗin",
  "Course deleted": "An goge kwas ɗin", "Course saved": "An ajiye kwas ɗin",
  "This cannot be undone.": "Ba za a iya mayar da shi ba.",
  "Error: ": "Kuskure: ",
  "Uploading...": "Ana ɗora hoto...", "Uploaded.": "An ɗora.",
  "Please choose an image file.": "Ka zaɓi fayil ɗin hoto.",
  "Image is larger than 8 MB.": "Hoton ya wuce 8 MB.", "Upload failed.": "Ɗora hoto ya gaza.",
  "No users yet. They will appear here after they sign up.": "Babu masu amfani tukuna. Za su bayyana a nan bayan sun yi rajista.",
  "No users match your search.": "Babu mai amfani da ya dace da binciken ka.",
  "No name": "Babu suna", "student": "ɗalibi",
  "Add tool": "Ƙara kayan aiki", "Edit tool": "Gyara kayan aiki", "Name": "Suna",
  "Tool link (optional)": "Link ɗin kayan aiki (ba dole ba)", "Status": "Yanayi",
  "Off (hidden from learners)": "A kashe (an ɓoye daga masu koyo)",
  "Save tool": "Ajiye kayan aiki", "Tool saved": "An ajiye kayan aikin", "Tool deleted": "An goge kayan aikin",
  "No tools yet. Click \"Add tool\" to create the first one.": "Babu kayan aiki tukuna. Danna \"Ƙara kayan aiki\" domin ƙara na farko.",
  "Off": "A kashe",
  "Community settings": "Saitunan al'umma", "WhatsApp group link": "Link ɗin rukunin WhatsApp",
  "Members text shown on the site": "Rubutun yawan mambobi da ake nunawa a shafin",
  "Save settings": "Ajiye saituna", "Settings saved": "An ajiye saitunan",
  "The link must start with https://": "Link ɗin dole ya fara da https://",
  "Add an admin": "Ƙara mai gudanarwa",
  "The person must have signed up on the website first.": "Dole mutumin ya riga ya yi rajista a shafin.",
  "Role": "Matsayin aiki", "Admin": "Mai gudanarwa", "Content Manager": "Mai kula da abun ciki",
  "Moderator": "Mai sa ido", "Support": "Tallafi", "Add admin": "Ƙara admin",
  "No user with that email. They must sign up first.": "Babu mai amfani da wannan email. Dole ya fara yin rajista.",
  "Admin added": "An ƙara mai gudanarwa", "Role updated": "An sabunta matsayi",
  "Admin disabled": "An kashe mai gudanarwa", "Admin enabled": "An kunna mai gudanarwa", "Admin removed": "An cire mai gudanarwa",
  "Disable": "Kashe", "Enable": "Kunna", "Remove": "Cire", "Active": "Yana aiki", "Disabled": "A kashe",
  "No admins found.": "Ba a sami masu gudanarwa ba.",
  "Lessons: ": "Darussa: ", "Add lesson": "Ƙara darasi", "Edit lesson": "Gyara darasi",
  "Order (1, 2, 3...)": "Jeri (1, 2, 3...)", "YouTube link (optional)": "Link ɗin YouTube (ba dole ba)",
  "Lesson text (optional)": "Rubutun darasi (ba dole ba)", "Clear": "Goge fom", "Save lesson": "Ajiye darasi",
  "Lesson saved": "An ajiye darasin", "Lesson deleted": "An goge darasin", "Delete lesson": "Goge darasi",
  "No lessons yet. Add the first one below.": "Babu darussa tukuna. Ƙara na farko a ƙasa.",
  "Add a YouTube link or some lesson text.": "Saka link ɗin YouTube ko rubutun darasi.",
  "Video": "Bidiyo", "Text": "Rubutu", "Video + Text": "Bidiyo + Rubutu",
  "Could not load courses: ": "Ba a iya ɗora kwasa-kwasai ba: ",
  "Could not load users: ": "Ba a iya ɗora masu amfani ba: ",
  "Could not load tools: ": "Ba a iya ɗora kayan aiki ba: ",
  "Could not load settings: ": "Ba a iya ɗora saituna ba: ",
  "Could not load admins: ": "Ba a iya ɗora masu gudanarwa ba: ",
  // ---- my courses & progress ----
  "My Courses": "Kwasa-kwasaina", "Continue": "Ci gaba", "Start": "Fara", "Completed": "An kammala",
  "Mark as complete": "Alama an gama darasin", "Course completed": "An kammala kwas ɗin",
  "Browse courses": "Duba kwasa-kwasai",
  "You have not enrolled in any course yet.": "Har yanzu ba ka yi rajista a kowane kwas ba.",
  "Could not save progress: ": "Ba a iya ajiye ci gaban ba: ",
  "Could not load your courses: ": "Ba a iya ɗora kwasa-kwasanka ba: ",
  // ---- admin overview ----
  "Overview": "Bayani gaba ɗaya", "Refresh": "Sabunta", "Loading...": "Ana ɗorawa...",
  "Top courses by enrollments": "Kwasa-kwasan da aka fi yin rajista a cikinsu",
  "Learners": "Masu koyo", "New this week": "Sababbi a wannan mako", "last 7 days": "kwana 7 da suka wuce",
  "Enrollments": "Rajista", "finished 100%": "an kammala 100%", "Completion rate": "Kashi na kammalawa",
  "No enrollments yet.": "Babu rajista tukuna.", "Published: ": "An buga: ",
  "Remove admin: ": "Cire mai gudanarwa: "
};

const PREFIXES = Object.keys(D).filter(k => k.endsWith(": "));
const STORE = "deepbuild_lang";
let lang = "en";
try { if (localStorage.getItem(STORE) === "ha") lang = "ha"; } catch {}

function trText(s) {
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const core = m[2];
  if (!core) return s;
  let out = D[core];
  if (out === undefined) {
    if (core.includes(" · ")) {
      out = core.split(" · ").map(p => D[p] ?? p).join(" · ");
    } else {
      const k = PREFIXES.find(p => core.startsWith(p));
      if (k) out = D[k] + core.slice(k.length);
    }
  }
  return out === undefined ? s : m[1] + out + m[3];
}

export const tr = s => (lang === "ha" ? trText(s) : s);
export const getLang = () => lang;

const orig = new WeakMap();
const SKIP = new Set(["SCRIPT", "STYLE", "TEXTAREA"]);

function tx(node) {
  const p = node.parentElement;
  if (!p || SKIP.has(p.tagName) || p.closest("[data-no-i18n]")) return;
  const v = node.nodeValue;
  if (!v || !v.trim()) return;
  let rec = orig.get(node);
  if (!rec || v !== rec.shown) rec = { en: v, shown: v };
  const out = lang === "ha" ? trText(rec.en) : rec.en;
  rec.shown = out;
  orig.set(node, rec);
  if (node.nodeValue !== out) node.nodeValue = out;
}
function walk(root) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) tx(n);
}
function attrs(root) {
  root.querySelectorAll("[placeholder],[aria-label]").forEach(el => {
    for (const a of ["placeholder", "aria-label"]) {
      if (!el.hasAttribute(a)) continue;
      const k = "data-en-" + a;
      if (!el.hasAttribute(k)) el.setAttribute(k, el.getAttribute(a));
      el.setAttribute(a, tr(el.getAttribute(k)));
    }
  });
}
function buttons() {
  document.documentElement.lang = lang === "ha" ? "ha" : "en";
  document.querySelectorAll(".langBtn").forEach(b => { b.textContent = lang === "ha" ? "English" : "Hausa"; });
}
function applyAll() { walk(document.body); attrs(document.body); buttons(); }

document.addEventListener("click", e => {
  if (!e.target.closest(".langBtn")) return;
  lang = lang === "ha" ? "en" : "ha";
  try { localStorage.setItem(STORE, lang); } catch {}
  applyAll();
});

new MutationObserver(muts => {
  for (const m of muts) {
    if (m.type === "characterData") tx(m.target);
    else m.addedNodes.forEach(n => {
      if (n.nodeType === 3) tx(n);
      else if (n.nodeType === 1) { walk(n); attrs(n); }
    });
  }
}).observe(document.body, { childList: true, subtree: true, characterData: true });

applyAll();
