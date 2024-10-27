// script.js

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const titleInput = document.getElementById("title");
  const departmentInput = document.getElementById("department");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const signaturePreview = document.getElementById("signaturePreview");

  function updateSignature() {
    const name = nameInput.value || "Your Name";
    const title = titleInput.value || "Your Job Title";
    const department = departmentInput.value || "Department";
    const email = emailInput.value || "your.email@example.com";
    const phone = phoneInput.value || "Your Phone Number";

    signaturePreview.innerHTML = `
      <strong>${name}</strong><br>
      ${title}<br>
      Network Architectures and Protocols<br>
      <a href="mailto:${email}">${email}</a><br>
      ${phone}<br>
      <img src="assets/it.jpg" alt="IT Logo" class="logo">
      <img src="assets/nap.png" alt="NAP Logo" class="logo">
    `;
  }

  [nameInput, titleInput, departmentInput, emailInput, phoneInput].forEach(
    (input) => {
      input.addEventListener("input", updateSignature);
    }
  );

  updateSignature(); // Initial preview

  window.copySignature = () => {
    const tempInput = document.createElement("textarea");
    tempInput.value = signaturePreview.innerHTML
      .replace(/<br>/g, "\n")
      .replace(/<\/?[^>]+(>|$)/g, ""); // Converts HTML to plain text with line breaks
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Signature copied to clipboard!");
  };
});
