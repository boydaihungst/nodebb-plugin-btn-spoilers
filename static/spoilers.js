$('document').ready(function() {
    require(['composer', 'composer/controls'], function(composer, controls) {
        composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
            if(selectionStart === selectionEnd){
                controls.insertIntoTextarea(textarea, "##spoiler\n\n##endspoiler");
                controls.updateTextareaSelection(textarea, selectionStart + 11, selectionStart + 11);
            } else {
                controls.wrapSelectionInTextareaWith(textarea, '##spoiler\n\n','\n##endspoiler');
                controls.updateTextareaSelection(textarea, selectionStart + 11, selectionEnd + 11);
            }
        });
    });

    $('body').on('click', 'a.show-spoiler', function(){
        $(this).parent().siblings('.spoiler').toggleClass('hidden');
        $(this).find('.fa').toggleClass('fa-eye');
        $(this).find('.fa').toggleClass('fa-eye-slash');
    });

});