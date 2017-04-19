window.Goal = {
	reach: function (goal) {
		console.log('Goal.reach '+goal);
		if (!goal) return;
		if (window.Ya && Ya._metrika.counter) {
			var ya = Ya._metrika.counter;
			ya.reachGoal(goal);
		}
		if (window.ga) {
			ga('send', 'event', goal);
		}
	}
}