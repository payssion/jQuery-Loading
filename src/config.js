(function($) {
	"use strict";

	$.fn.loading.defaults = {
		opacity:    0.9,
		//speedIn:    300,
		//speedOut:   1000,

		algorithm: 'snake',
		effect:    ['simple'],

		spinner: {
			width:   35,
			height:  35,
			matrix: {
				x: null,
				y: null
			},
			pin: {
				width:  7,
				height: 7,
				margin: {
					top:    1,
					right:  1,
					bottom: 0,
					left:   0
				}
			},
			interval: 100
		},

		background: {
			color:        'white',
			img:          null,
			borderRadius: 1,
			// raw css
			css: {
				opacity: 0.8
			}
		}
	};
})(jQuery);
