'use strict';

var NSFWSpoilers = {
  parse: function (data, callback) {
    if (!data) return callback(null, data);
    var nfswTransform = async function (content) {
      var translator = require.main.require('./public/src/modules/translator');
      const showBtnWarning = await translator.translate('[[nsfw:show-btn-warning]]');
      const showBtnLabel = await translator.translate('[[nsfw:show-btn-label]]');
      const hideBtnLabel = await translator.translate('[[nsfw:hide-btn-label]]');
      return content
        .replace(
          /\#\#spoiler/g,
          `<div><div href="#" class="spoiler-switcher hiding btn btn-md btn-default waves-effect" title="${showBtnWarning}"><i class="fa fa-eye-slash fa-fw"></i><span class="btn-text" data-show_text="${showBtnLabel}" data-hide_text="${hideBtnLabel}">${showBtnLabel}</span></div><div class="panel panel-default hidden spoiler">`,
        )
        .replace(/\#\#endspoiler/g, '</div></div>');
    };
    if ('string' === typeof data) {
      nfswTransform(data).then((parsedContent) => {
        data = parsedContent;
        callback(null, data);
      });
    } else if (data.postData && data.postData.content != null && data.postData.content != undefined) {
      nfswTransform(data.postData.content).then((parsedContent) => {
        data.postData.content = parsedContent;
        callback(null, data);
      });
    } else if (data.userData && data.userData.signature != null && data.userData.signature != undefined) {
      nfswTransform(data.userData.signature).then((parsedContent) => {
        data.userData.signature = parsedContent;
        callback(null, data);
      });
    }
  },
};

module.exports = NSFWSpoilers;
