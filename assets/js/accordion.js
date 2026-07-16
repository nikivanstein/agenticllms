(function () {
  function wire(container) {
    container.querySelectorAll(':scope > .part').forEach(function (part) {
      var btn = part.querySelector(':scope > .part-toggle');
      var panel = part.querySelector(':scope > .chapters');
      if (!btn || !panel) return;
      btn.addEventListener('click', function () {
        var isOpen = part.classList.contains('open');
        if (isOpen) {
          panel.style.maxHeight = '0px';
          part.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          part.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  document.querySelectorAll('.parts-accordion').forEach(wire);

  // Deep-link support: /syllabus/#part-3 opens and scrolls to Part III
  // (scoped to the accordion with id="parts" so other accordions on the
  // page, e.g. the schedule, don't clash with the same hash pattern)
  var hash = window.location.hash.match(/^#part-(\d)$/);
  if (hash) {
    var target = document.querySelector('#parts .part[data-part="' + hash[1] + '"]');
    if (target) {
      var toggle = target.querySelector(':scope > .part-toggle');
      if (toggle) toggle.click();
      target.scrollIntoView({ block: 'start' });
    }
  }
})();
