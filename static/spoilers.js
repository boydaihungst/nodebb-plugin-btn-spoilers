$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, "##spoiler \n\n##endspoiler");
				controls.updateTextareaSelection(textarea, selectionStart + 16, selectionStart + 33);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '##spoiler \n\n','\n##endspoiler');
				controls.updateTextareaSelection(textarea, selectionStart + 16, selectionEnd + 16);
			}
		});
	});
});