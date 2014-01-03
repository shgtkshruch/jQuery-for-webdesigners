// $(function() {
//   var img = $('.rollover img');
// 
//   img.hover(function() {
//     var nowimg = $(this).attr('src');
//     var srcon = nowimg.replace('off', 'on');
//     $(this).attr('src', srcon);
//   }, function() {
//     var nowimg = $(this).attr('src');
//     var srcoff = nowimg.replace('on', 'off');
//     $(this).attr('src', srcoff);
//   });
// });

// $(function() {
//   $('.rollover').each(function() {
//     var a = $(this);
//     var img = a.find('img');
//     var src_off = img.attr('src');
//     var src_on = src_off.replace('off', 'on');
//     $('<img>').attr('src', src_on);
// 
//     a.hover(function() {
//       img.attr('src', src_on);
//     }, function() {
//       img.attr('src', src_off);
//     }); 
//   });
// });

$(function() {
  $('.rollover').each(function() {
    var a = $(this);
    var img = a.find('img');
    var src_off = img.attr('src');
    var src_on = src_off.replace('off', 'on');

    a.bind('mouseenter focus', function() {
      img.attr('src', src_on);
    });
    a.bind('mouseleave blur', function() {
      img.attr('src', src_off);
    })
  });
});
