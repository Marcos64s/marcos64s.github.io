// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Get input elements
  const nameInput = document.getElementById("name");
  const titleInput = document.getElementById("title");
  const departmentInput = document.getElementById("department");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const researchareaInput = document.getElementById("researcharea");
  const signaturePreview = document.getElementById("signaturePreview");

  function updateSignature() {
    // Get values or set defaults
    const name = nameInput?.value || "Your Name";
    const title = titleInput?.value || "Your Job Title";
    const department =
      departmentInput?.value || "Network Architectures and Protocols";
    const researcharea = researchareaInput?.value || "Your Research Area";
    const email = emailInput?.value || "your.email@av.it.pt";
    const phone = phoneInput?.value || "Your Phone Number";

    signaturePreview.innerHTML = `
      <strong>${name}</strong><br>
      ${title} - ${researcharea}<br>
      ${department}<br>
      <a href="mailto:${email}">${email}</a><br>
      Tel: ${phone}<br>
      <img src="assets/it.jpg" alt="IT Logo" class="logo">
      <img src="assets/nap.png" alt="NAP Logo" class="logo">
    `;
  }

  [
    nameInput,
    titleInput,
    departmentInput,
    emailInput,
    phoneInput,
    researchareaInput,
  ].forEach((input) => {
    input?.addEventListener("input", updateSignature);
  });

  updateSignature(); // Initial preview

  window.copySignature = () => {
    // Check if Clipboard API is available
    if (navigator.clipboard && navigator.clipboard.write) {
      const signatureHTML = signaturePreview.innerHTML;

      // Copy formatted HTML to clipboard
      navigator.clipboard
        .write([
          new ClipboardItem({
            "text/html": new Blob([signatureHTML], { type: "text/html" }),
            "text/plain": new Blob([signaturePreview.innerText], {
              type: "text/plain",
            }),
          }),
        ])
        .then(() => {
          alert("Signature copied with formatting!");
        })
        .catch((err) => {
          console.error("Failed to copy signature: ", err);
        });
    } else {
      // Fallback for older browsers without Clipboard API
      const tempDiv = document.createElement("div");
      tempDiv.contentEditable = true;
      tempDiv.style.position = "absolute";
      tempDiv.style.left = "-9999px";
      tempDiv.innerHTML = signaturePreview.innerHTML;
      document.body.appendChild(tempDiv);
      tempDiv.focus();
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.body.removeChild(tempDiv);
      alert("Signature copied with limited formatting.");
    }
  };
});
