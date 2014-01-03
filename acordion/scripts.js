// $(function(){//{{{
// 	$('.accordion').each(function(){
// 		var dl = $(this);
// 		var allDt = dl.find('dt');
// 		var allDd = dl.find('dd');
// 		allDd.hide();
//         allDt.css('cursor','pointer');
// 		allDt.click(function(){
// 			var dt = $(this);
// 			var dd = dt.next();
// 			allDd.hide();
// 			dd.show();
// 			allDt.css('cursor','pointer');
// 			dt.css('cursor','default');
// 		});
// 	});
// });//}}}

$(function(){
  var class_closed = 'closed';
  $('.accordion').each(function(){
    var dl = $(this);
    var allDt = dl.find('dt');
    var allDd = dl.find('dd');

    function closeAll(){
      allDd.addClass(class_closed);
      allDt.addClass(class_closed);
    }
    closeAll();

    function open(dt, dd){
      dt.removeClass(class_closed);
      dd.removeClass(class_closed);
    }

    allDt.click(function(){
      var dt = $(this);
      var dd = dt.next();
      closeAll();
      open(dt, dd);
    });
  });
});
