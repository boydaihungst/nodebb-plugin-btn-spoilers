"use strict";

var plugin = {};


plugin.parse = function(postContent, callback) {
	// this regex could be better
	postContent = postContent
		.replace(/<p>! *([\S\s]*?)<\/p>/gm, '</blockquote><blockquote()><div onclick="if(document.getElementById(\'spoiler\') .style.display==\'none\') {document.getElementById(\'spoiler\') .style.display=\'\'}else{document.getElementById(\'spoiler\') .style.display=\'none\'}"></div><div><p>$1</p></span></blockquote><blockquote()>')
		.replace(/<blockquote><div>\s*<\/blockquote>/g, '');

	callback(null, postContent);
};

module.exports = plugin;