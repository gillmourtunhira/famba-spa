// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".subtitle__header.svelte-12ztb40.svelte-12ztb40{background-color:#000;width:100%;height:45px;display:flex;justify-content:center;align-items:center}.subtitle__header.svelte-12ztb40 h5.svelte-12ztb40{color:#fff;text-align:center;font-weight:100;font-style:italic}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}