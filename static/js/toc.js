
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("post-toc");
  const toggle = document.getElementById("toc-toggle");

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    toc.classList.toggle("hidden");
  });
});

