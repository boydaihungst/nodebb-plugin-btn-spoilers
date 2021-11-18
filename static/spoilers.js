$('document').ready(function() {
    require(['composer', 'composer/controls', 'translator'], function(composer, controls, translator) {
        composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
            translator.translate('[[nsfw:default-title]]', function(defaultTitle) {
                var spoilersTitle = defaultTitle;
                if(selectionStart === selectionEnd){
                    controls.insertIntoTextarea(textarea, "##spoiler=" + spoilersTitle + "\n\n##endspoiler");
                    controls.updateTextareaSelection(textarea, selectionStart + 11 + spoilersTitle.length, selectionStart + 11 + spoilersTitle.length);
                } else {
                    controls.wrapSelectionInTextareaWith(textarea, '##spoiler=' + spoilersTitle + '\n\n##endspoiler');
                    controls.updateTextareaSelection(textarea, selectionStart + 11 + spoilersTitle.length, selectionEnd + 11 + spoilersTitle.length);
                }
            });
        });
    });
    $('body').on('click', 'div.spoiler-switcher', function(){
        $(this).toggleClass('showing');
        $(this).toggleClass('hiding');
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