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
      const url = await uploadToImgbb(file);
      urlEl.value = url;
      showPreview(url);
      statusEl.textContent = "Uploaded.";
    } catch (err) {
      statusEl.textContent = err.message;
      statusEl.style.color = "var(--red)";
    }
    fileEl.value = "";
    onDone && onDone();
  });

  return { showPreview };
}
