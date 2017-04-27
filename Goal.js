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
		var first = false;
		Event.handler('Controller.onshow', function () {
			if (!first) {
				first = true;
				return;
			}
			console.log('Goal.hit');
			if (window.ga) ga('send', 'pageview');
			if (window.Ya) Ya._metrika.counter.hit(location.href);
	    });
	}
}