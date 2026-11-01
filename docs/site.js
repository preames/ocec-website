// Fill the "Last updated" stamp in the header from the document's
// Last-Modified header (set by GitHub Pages at deploy time).
(function () {
  var el = document.getElementById('last-updated');
  if (!el) return;
  var d = new Date(document.lastModified);
  if (isNaN(d)) return;
  el.dateTime = d.toISOString().slice(0, 10);
  el.textContent = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
})();
