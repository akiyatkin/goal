window.Goal = {
	reach: function (goal) {
		console.log('Goal.reach '+goal);
		if (!goal) return;
		if (window.Ya) {
			var ya = Ya._metrika.counter;
			ya.reachGoal(goal);
		}
		if (window.ga) {
			ga('send', 'event', goal);
		}
	},
	handler: function () {
		Event.handler('Controller.onshow', function () {
			console.log('Goal.hit');
			if (window.ga) ga('send', 'pageview');
			if (window.Ya) Ya._metrika.counter.hit();
	    });
	}
}