
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre > code").forEach(function (codeElem) {
    const pre = codeElem.parentElement;

    // 创建复制按钮
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.innerText = "Copy";

    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(codeElem.innerText).then(() => {
        btn.innerText = "Copied";
        setTimeout(() => btn.innerText = "Copy", 1500);
      });
    });

    // 避免重复添加
    if (!pre.querySelector(".copy-btn")) {
      pre.style.position = "relative";  // 方便绝对定位按钮
      pre.appendChild(btn);
    }
  })
});
