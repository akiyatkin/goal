import { Event } from "/vendor/infrajs/event/Event.js"
import { Once } from '/vendor/infrajs/once/Once.js'
import { Crumb } from '/vendor/infrajs/controller/src/Crumb.js'
import { DOM } from '/vendor/akiyatkin/load/DOM.js'
let Goal = {
	reach: function (goal) {
		console.log('Goal.reach ' + goal);
		if (!goal) return;
		if (window.Ya) {
			var ya = Ya._metrika.counter;
			ya.reachGoal(goal);
		}
		if (window.gtag) {
			gtag('event', goal, { 'event_category': goal });
		} else if (window.ga) {
			ga('send', 'event', goal);
		}
		if (window.fbq) {
			fbq('track', 'Lead');
		}
	},
	ajax: async () => {
		if (Once.omit('-goal/ajax')) return; 
		await DOM.wait('show') //Счётчик не может добавляться с async или defer
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
	}
}
export { Goal }
export default Goal