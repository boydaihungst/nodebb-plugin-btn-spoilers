$('document').ready(function () {
  require(['composer', 'composer/controls', 'translator'], function (composer, controls, translator) {
    translator.translate('[[nsfw:icon-title-composer]]', function (iconTitleOnComposerToolbar) {
      composer.addButton(
        'fa fa-eye-slash',
        function (textarea, selectionStart, selectionEnd) {
          //   var spoilersTitle = await translator.translate('[[nsfw:default-title]]');
          var spoilersTitle = '';
          const spoilerStartTag = '##spoiler';
          const spoilerEndTag = '##endspoiler';
          if (selectionStart === selectionEnd) {
            controls.insertIntoTextarea(textarea, spoilerStartTag + spoilersTitle + '\n\n' + spoilerEndTag);
            controls.updateTextareaSelection(
              textarea,
              selectionStart + spoilerStartTag.length + 1 + spoilersTitle.length,
              selectionEnd + spoilerStartTag.length + 1 + spoilersTitle.length,
            );
          } else {
            controls.wrapSelectionInTextareaWith(
              textarea,
              spoilerStartTag + spoilersTitle + '\n',
              '\n' + spoilerEndTag,
            );
            controls.updateTextareaSelection(
              textarea,
              selectionStart + spoilerStartTag.length + 1 + spoilersTitle.length,
              selectionEnd + spoilerStartTag.length + 1 + spoilersTitle.length,
            );
          }
        },
        iconTitleOnComposerToolbar,
      );
    });
  });
  $('body').on('click', 'div.spoiler-switcher', function () {
    $(this).toggleClass('showing');
    $(this).toggleClass('hiding');
    $(this).find('.fa').toggleClass('fa-eye');
    $(this).find('.fa').toggleClass('fa-eye-slash');
    if ($(this).find('.fa').hasClass('fa-eye')) {
      $(this).find('.btn-text').first().text($(this).find('.btn-text').first().data('hide_text'));
    } else {
      $(this).find('.btn-text').first().text($(this).find('.btn-text').first().data('show_text'));
    }
    $(this).parent().find('> .spoiler').toggleClass('hidden');
  });
});
