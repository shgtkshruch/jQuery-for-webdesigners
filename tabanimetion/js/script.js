$(function() {
  return $('.tabSet').each(function() {
    var anchors, lastAnchor, lastPanel, panels, topDiv;
    topDiv = $(this);
    anchors = topDiv.find('ul.tabs a');
    panels = topDiv.find('div.panel');
    lastAnchor = anchors.filter('.on');
    lastPanel = $(lastAnchor.attr('href'));
    anchors.show();
    panels.hide();
    lastPanel.show();
    return anchors.click(function(event) {
      var currentAnchor, currentPanel;
      event.preventDefault();
      currentAnchor = $(this);
      currentPanel = $(currentAnchor.attr('href'));
      if (currentAnchor.get(0) === lastAnchor.get(0)) {
        return;
      }
      return lastPanel.slideUp(200, function() {
        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');
        currentPanel.slideDown(200);
        lastAnchor = currentAnchor;
        return lastPanel = currentPanel;
      });
    });
  });
});

/*
//@ sourceMappingURL=script.js.map
*/