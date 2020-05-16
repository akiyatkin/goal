import { Seq } from '/vendor/infrajs/sequence/Seq.js'
import { Form } from '/vendor/akiyatkin/form/Form.js'
import { Fire } from '/vendor/akiyatkin/load/Fire.js'

let Goal = { ...Fire,
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


Form.done('submit', async (form, ans) => {
	if (!ans.result) return;
	if (!form.dataset.goal) return
	Goal.reach(form.dataset.goal);
})


export { Goal }
export default Goal