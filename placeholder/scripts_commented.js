$(function(){
	
	$('.guideText').each(function(){
		
		// 初期value値を取得
		var guideText = this.defaultValue;

		// jQueryオブジェクトを準備
		var element = $(this);

		// フォーカスされた時
		element.focus(function(){
			// 値が初期値なら
			if(element.val()===guideText){
				// 値を空にして
				element.val('');
				// クラス'guide'を削除
				element.removeClass('guide');
			}
		});

		// フォーカスが外れた時
		element.blur(function(){
			// 何も入力されていなかったら
			if(element.val()===''){
				// 初期値をセットして
				element.val(guideText);
				// クラス'guide'を追加
				element.addClass('guide');
			}
		});

		// もし初期値が入力されていたら'guide'クラス追加
		if(element.val()===guideText){
			element.addClass('guide');
		}

	});

});
