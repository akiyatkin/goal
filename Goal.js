import { Seq } from '/vendor/infrajs/sequence/Seq.js'
import { Fire } from '/vendor/akiyatkin/load/Fire.js'

let Goal = { ...Fire,
	reach: function (goal) {
		console.log('Goal.reach ' + goal);
		if (!goal) return;

		if (window.dataLayer && dataLayer[0] && dataLayer[0]["gtm.start"]) {
			dataLayer.push({
				'event': goal
			});
		} else {
			if (window.Ya) {
				const ya = Ya._metrika.counter;
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
		}
		
	}
}

export { Goal }
export default Goal