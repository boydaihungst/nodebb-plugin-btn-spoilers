$('document').ready(function() {
    require(['composer', 'composer/controls'], function(composer, controls) {
        composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {

            var spoilersTitle = "=NSFW content";
            if(selectionStart === selectionEnd){
                controls.insertIntoTextarea(textarea, "##spoiler=" + spoilersTitle + "\n\n##endspoiler");
                controls.updateTextareaSelection(textarea, selectionStart + 11 + spoilersTitle.length, selectionStart + 11 + spoilersTitle.length);
            } else {
                controls.wrapSelectionInTextareaWith(textarea, '##spoiler' + spoilersTitle + '\n\n','\n##endspoiler');
                controls.updateTextareaSelection(textarea, selectionStart + 11 + spoilersTitle.length, selectionEnd + 11 + spoilersTitle.length);
            }
        });
    });

    $('body').on('click', 'div.show-spoiler', function(){
        $(this).find('.fa').toggleClass('fa-eye');
        $(this).find('.fa').toggleClass('fa-eye-slash');
        if($(this).find('.fa').hasClass('fa-eye')){
            $(this).find('.btn-text').first().text($(this).find('.btn-text').first().data('hide_text'));
        } else {
            $(this).find('.btn-text').first().text($(this).find('.btn-text').first().data('show_text'));
        }
        $(this).parent().find('> .spoiler').toggleClass('hidden');
    });

});