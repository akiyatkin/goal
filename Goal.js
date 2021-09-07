const Goal = {
	reach: function (goal) {
		console.log('Goal.reach ' + goal)
		if (!goal) return
		if (window.dataLayer) {
			dataLayer.push({
				'event': goal
			})
		} else {
			if (window.ga) {
				ga('send', 'event', goal)
			}
			if (window.fbq) {
				fbq('track', 'Lead')
			}	
			if (window.Ya) {
				const ya = Ya._metrika.counter
				ya.reachGoal(goal)
			}
		}
	}
}
window.Goal = Goal
export { Goal }