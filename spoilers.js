"use strict";

var BTNSpoilers = {
    parse: function(postData, callback) {
        postData.postData.content = postData.postData.content
            .replace(/\#\#spoiler/g, '<a href="#" class="show-spoiler btn btn-md btn-default waves-effect"><i class="fa fa-eye-slash fa-fw"></i> Spoiler!</a><div class="spoiler hidden">')
            .replace(/\#\#endspoiler/g, '</div>')

        callback(null, postData);
    }
};

module.exports = BTNSpoilers;