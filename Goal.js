window.Goal = {
	reach: function (goal) {
		console.log('Goal.reach '+goal);
		if (!goal) return;
		if (window.Ya) {
			var ya = Ya._metrika.counter;
			ya.reachGoal(goal);
		}
		if (window.gtag) {
			gtag('event', goal,{'event_category': goal});
		} else if (window.ga) {
			ga('send', 'event', goal);
		}

		if (window.fbq) {
			fbq('track', 'Lead');
		}
	},
	ajax: function () {
		if (Once.omit('-goal/ajax')) return; //omit в первый раз возвращает false остальные true
		Event.handler('Crumb.onchange', function () {
			if (!Once.omit('-goal/crumb')) return; //omit в первый раз возвращает false остальные true
			var page = location.pathname+location.search+location.hash;
			if (window.Ya) Ya._metrika.counter.hit(page);
			
			if (window.gtag) {
				var trackid = dataLayer[1][1];
				gtag('config', trackid, {
					'page_path': page
				});
			} else if (window.ga) {
				ga('set', 'page', page);
				ga('send', 'pageview');
			}
			
	    });
	}
}
