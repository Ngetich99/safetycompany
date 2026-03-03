// Create mascot automatically on every page
window.addEventListener("DOMContentLoaded", function () {

  const img = document.createElement("img");
  img.src = "img/firextinguisher.gif"; // <-- your exact file name
  img.id = "fireMascot";
  img.className = "fire-mascot";

  document.body.appendChild(img);

  // CSS injected automatically
  const style = document.createElement("style");
  style.innerHTML = `
    .fire-mascot {
      position: fixed;
      bottom: 20px;
      left: -150px;
      width: 120px;
      z-index: 9999;
      cursor: pointer;
      animation: walkAcross 18s linear infinite;
    }

    @keyframes walkAcross {
      0% { left: -150px; }
      100% { left: 100%; }
    }
  `;
  document.head.appendChild(style);

});
