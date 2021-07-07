import { Seq } from '/vendor/infrajs/sequence/Seq.js'
import { Fire } from '/vendor/akiyatkin/load/Fire.js'

const Goal = { ...Fire,
	reach: function (goal) {
		console.log('Goal.reach ' + goal);
		if (!goal) return;
		
		// if (window.dataLayer && dataLayer[0] && dataLayer[0]["gtm.start"]) {
		// 	//Такое событие попадёт и в GA4 и в GU
		// 	dataLayer.push({
		// 		'event': goal
		// 	});
		// } else {
		// 	if (window.gtag) {
		// 		gtag('event', goal, { 'event_category': goal });
		// 	}
		// }
		// if (window.ga) {
		// 	ga('send', 'event', goal);
		// }

		if (window.dataLayer) {
			dataLayer.push({
				'event': goal
			});
		} else {
			if (window.ga) {
				ga('send', 'event', goal);
			}
			if (window.fbq) {
				fbq('track', 'Lead');
			}	
			if (window.Ya) {
				const ya = Ya._metrika.counter;
				ya.reachGoal(goal);
			}
		}
	}
}
window.Goal = Goal
export { Goal }
export default Goal