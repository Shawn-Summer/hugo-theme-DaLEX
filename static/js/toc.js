
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("post-toc");
  const toggle = document.getElementById("toc-toggle");
  const tocContent = document.getElementById("TableOfContents"); // 核心内容容器
  if(tocContent.textContent.trim() == ''){
    toggle.style.display = "none";
    toc.style.display = "none";
  }
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    toc.classList.toggle("hidden");
  });
});

