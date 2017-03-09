'use strict';
module.exports = function (opts) {
	opts = opts || {};
	var re = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
	return opts.exact ? new RegExp('^' + re + '$') : new RegExp(re, 'g');
};
