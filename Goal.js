import { Seq } from '/vendor/infrajs/sequence/Seq.js'
import { Form } from '/vendor/akiyatkin/form/Form.js'
import { Fire } from '/vendor/akiyatkin/load/Fire.js'

let Goal = {
	on: (...params) => Fire.on(Goal, ...params),
    hand: (...params) => Fire.hand(Goal, ...params),
    wait: (...params) => Fire.wait(Goal, ...params),
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
	}
}

Goal.hand('init', async ({form, goal}) => {
		Form.get('submit', async (f) => {	
		if (form != f) return
		if (!Seq.getr(form, ['ans', 'result'])) return;
		Goal.reach(goal);
	})
})


export { Goal }
export default Goal