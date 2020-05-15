import { Once } from '/vendor/infrajs/once/Once.js'
import { Event } from "/vendor/infrajs/event/Event.js"
import { Crumb } from '/vendor/infrajs/controller/src/Crumb.js'

Event.handler('Crumb.onchange', async () => {
	if (!Once.omit('-goal/crumb')) return; //omit в первый раз возвращает false остальные true
	//Счётчики точно есть потому что это 2ой просмотр после точки входа
	var page = location.pathname + location.search + location.hash;
	if (window.Ya) {
		let num = ym.a[0][0];
		ym(num, 'hit', page, {
			referer: Crumb.referrer
		})
		//Ya._metrika.counter.hit(page);
	}
	if (window.gtag) {
		var trackid = dataLayer[1][1];
		gtag('config', trackid, {
			'page_path': page
		});
	} else if (window.ga) {
		ga('set', 'page', page);
		ga('send', 'pageview');
	}

});