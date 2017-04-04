function checkForCharacter(id, character) {

	var cfp = $('#' + id);
	
	cfp.bind('keyup', function(e){	
		var targetText = cfp.val();
		if ( targetText.indexOf(character) > -1 ){
			var lengthOriginal = targetText.length;
			var numOfChar = targetText.split(character)[0];
			var NumericalChar = numOfChar.length;
			if(lengthOriginal > NumericalChar) { 
				cfp.css('background-color','pink');
				cfp.attr('maxlength', lengthOriginal);
				$('input[type=submit]').attr('disabled','disabled');
			} else {
				console.log('inactive');
			}
			if(!$('span#keypressWarningMessage').length) {
				cfp.after('<span id="keypressWarningMessage">The "'+ character +'" character is not allowed.</span>');	
			}
		} else {
			$('span#keypressWarningMessage').remove();
			cfp.css('background-color','#fff');
			cfp.removeAttr('maxlength');
			$('input[type=submit]').removeAttr('disabled');
		}
	});

}
