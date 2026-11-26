/* Turkey eVisa comments - update the Disqus shortname on the next line ONLY. */
(function () {
  'use strict';

  // REQUIRED: Register https://evisa-turkey.github.io/turkey-evisa/ on Disqus.
  // Replace YOUR_DISQUS_SHORTNAME below with the exact shortname from Disqus Admin.
  var DISQUS_SHORTNAME = 'turkey-evisa-1';

  var region = document.getElementById('turkey-comments');
  var note = document.getElementById('disqus-setup-note');
  if (!region) return;

  if (!DISQUS_SHORTNAME || DISQUS_SHORTNAME === 'YOUR_DISQUS_SHORTNAME' ||
      !/^[a-z0-9-]+$/i.test(DISQUS_SHORTNAME)) {
    if (note) note.hidden = false;
    return; // Do not load an invalid, missing, or someone else's Disqus forum.
  }

  var file = region.getAttribute('data-comment-page') || 'index.html';
  var base = 'https://evisa-turkey.github.io/turkey-evisa/';
  var canonicalUrl = base + (file === 'index.html' ? '' : file);
  var identifier = 'turkey-evisa-' + file.replace(/\.html$/i, '');
  if (note) note.remove();

  window.disqus_config = function () {
    this.page.url = canonicalUrl;
    this.page.identifier = identifier;
    this.page.title = document.title;
  };

  var script = document.createElement('script');
  script.src = 'https://' + DISQUS_SHORTNAME.toLowerCase() + '.disqus.com/embed.js';
  script.async = true;
  script.setAttribute('data-timestamp', String(+new Date()));
  (document.head || document.body).appendChild(script);
})();
