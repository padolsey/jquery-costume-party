jQuery.enrobe = function enrobe(costume) {
	for (var i in costume)
		jQuery.fn[costume[i]] = jQuery.fn[i];
};