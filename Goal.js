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
		this.ajax = function(){};
		var first = false;
		Event.handler('Crumb.onchange', function () {
			if (!first) {
				first = true;
				return;
			}
			if (Goal.metrika) Goal.metrika.hit(location.href);
			if (Goal.analytics) Goal.analytics('send', 'pageview');
	    });
	},
	ajaxMetrika: function () {
		Goal.ajax();
		Goal.metrika = Ya._metrika.counter;
	},
	ajaxAnalytics: function () {
		Goal.ajax();
		Goal.analytics = ga;
	}
}