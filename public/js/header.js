jQuery(document).ready(function()
{
	$.simpleSlideshow({
		container : '.custom-slider', // Селектор контейнера с элементами
		item : 'div', // Селектор элемента
		delay : 4000, // Задержка между сменой элементов в миллисекундах
		speed : 1000, // Скорость анимации элементов в миллисекундах
	});
});


;(function($)
{
	$.simpleSlideshow = function(options)
	{
		var plugin = this;

		plugin.settings = $.extend({ container : 'ul.slideshow', item : 'li', delay : 1000, speed : 500 }, options || {});
		
		plugin.setSlideshow = function()
		{
			$(plugin.settings.container).each(function(i, box)
			{
				$(' > ' + plugin.settings.item + ':gt(0)', $(box)).hide();
				
				setInterval(function()
				{
					$(' > ' + plugin.settings.item + ':first', $(box))
					.fadeOut(plugin.settings.speed)
					.next()
					.fadeIn(plugin.settings.speed)
					.end()
					.appendTo($(box));
				},
				plugin.settings.delay);
			});
		};
		
		plugin.setSlideshow();
	}
})(jQuery);