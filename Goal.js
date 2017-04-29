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
	ajax: function () {
		Goal.ajax = function(){};
		var first = false;
		Event.handler('Crumb.onchange', function () {
			if (!first) {
				first = true;
				return;
			}
			if (window.Ya) Ya._metrika.counter.hit(location.href);
			if (window.ga) ga('send', 'pageview');
	    });
	}
}