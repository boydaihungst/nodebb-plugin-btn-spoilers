"use strict";

var NSFWSpoilers = {
    parse: function(postData, callback) {
        postData.postData.content = postData.postData.content
            //.replace(/\#\#spoiler/g, '<a href="#" class="show-spoiler btn btn-md btn-default waves-effect" tooltip="open at your own discretion"><i class="fa fa-eye-slash fa-fw"></i><span>NSFW!</span></a><div class="spoiler hidden">')
            .replace(/\#\#spoiler/g, '<div><div href="#" class="show-spoiler btn btn-md btn-default waves-effect" title="Open at your own discretion"><i class="fa fa-eye-slash fa-fw"></i><span> NSFW!</span></div><div class="spoiler hidden">')
            //.replace(/\#\#endspoiler/g, '</div>')
            .replace(/\#\#endspoiler/g, '</div></div>')

        callback(null, postData);
    }
};

module.exports = NSFWSpoilers;