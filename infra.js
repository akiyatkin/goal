import { Crumb } from '/vendor/infrajs/controller/src/Crumb.js'
import { DOM } from '/vendor/akiyatkin/load/DOM.js'
import { Controller } from '/vendor/infrajs/controller/src/Controller.js'
import { Goal } from '/vendor/akiyatkin/goal/Goal.js'


let ws = new WeakSet() //add, has, delete
DOM.done('load', () => {
	const cls = (cls) => document.getElementsByClassName(cls)
	for (const el of cls('goal')) {
		if (!el.dataset.goal) continue
		if (ws.has(el)) continue
		ws.add(el)
		el.addEventListener('click', () => Goal.reach(el.dataset.goal))
	}
})

Crumb.done('change', async () => {
	if (Crumb.counter < 2) return
	if (Controller.check.promise) await Controller.check.promise
	//const page = location.href; // location.pathname + location.search + location.hash
	//const title = document.title
	

	//Событие асинхронного перехода всегда отправляем с сайта.
	if (window.Ya) { //Неважно как установлена метрика. 
		// if (window.ym) {
		// 	let num = ym.a[0][0]
		// 	ym(num, 'hit', page, {
		// 		referer: Crumb.referrer
		// 	})
		// } else if (Ya._metrika.counter) {
			Ya._metrika.counter.hit(location.href);
			//Ya._metrika.counter.reachGoal('pageview');
		//}
		
	}
	if (window.gtag) { //Неважно как установлен GA и какой версии. Шлём события pageview. 
		var trackid = dataLayer[1][1];
		gtag('config', trackid, {
			'page_title' : document.title,
			'page_path': location.href
		});
	} else if (window.ga) {
		ga('set', 'page', location.href)
		ga('set', 'title', document.title)
		ga('send', 'pageview')
	}

	if (window.dataLayer) {
		dataLayer.push({
			event: 'pageview',
			page: {
				path: location.href,
				title: document.title
			}
		});
	}

	// if (window.dataLayer && dataLayer[0] && dataLayer[0]["gtm.start"]) {
	// 	// В GA4 не должно быть галочки в page_view в автоматических событиях
	// 	// Метрика никак не обрабатывает history только через это специально событие
	// 	// dataLayer.push({
	// 	// 	'event': 'pageview'
	// 	// });
	// } else { // Добавлено 11 марта 2021 года в 11:59
		
		
	// }
	
})