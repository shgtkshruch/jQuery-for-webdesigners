$(function() {
  return $('.tabSet').each(function() {
    var anchors, lastAnchor, lastPanel, panels, topDiv;
    topDiv = $(this);
    anchors = topDiv.find('ul.tabs a');
    panels = topDiv.find('div.panel');
    lastAnchor = '';
    lastPanel = '';
    lastAnchor = anchors.filter('.on');
    lastPanel = $(lastAnchor.attr('href'));
    anchors.show();
    panels.hide();
    lastPanel.show();
    return anchors.click(function() {
      var currentAnchor, currentPanel;
      currentAnchor = $(this);
      currentPanel = $(currentAnchor.attr('href'));
      lastAnchor.removeClass('on');
      currentAnchor.addClass('on');
      lastPanel.hide();
      currentPanel.show();
      lastAnchor = currentAnchor;
      lastPanel = currentPanel;
      return console.log(lastAnchor);
    });
  });
});

/*
//@ sourceMappingURL=script.js.map
*/