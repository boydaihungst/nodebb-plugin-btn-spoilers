"use strict";
var NSFWSpoilers = {
    transform: function(postData) {
        postData.content = postData.content
            .replace(/\#\#spoiler=([^<]*)/g, '***' + '$1' + '***' + '##spoiler')
            .replace(/\#\#spoiler/g, `<div><div href="#" class="spoiler-switcher hiding btn btn-md btn-default waves-effect" title="[[nsfw:show-btn-warning]]"><i class="fa fa-eye-slash fa-fw"></i><span class="btn-text" data-show_text="[[nsfw:show-btn-label]]" data-hide_text="[[nsfw:hide-btn-label]]">[[nsfw:show-btn-label]]</span></div><div class="spoiler hidden">`)
            .replace(/\#\#endspoiler/g, '</div></div>')

    },
    parse: function(data, callback) {
        if (data && 'string' === typeof data) {
            data = this.transform(data);
        } else if (data.postData && data.postData.content) {
            data.postData.content = this.transform(data.postData.content);
        } else if (data.userData && data.userData.signature) {
            data.userData.signature = this.transform(data.userData.signature);
        }
        callback(null, data);
    }
};

module.exports = NSFWSpoilers;