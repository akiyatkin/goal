import { Crumb } from '/vendor/infrajs/controller/src/Crumb.js'


Crumb.hand('change', () => {
	if (Crumb.counter < 2) return
	var page = location.pathname + location.search + location.hash
	
	if (window.Ya) {
		if (window.ym) {
			let num = ym.a[0][0]
			ym(num, 'hit', page, {
				referer: Crumb.referrer
			})
		} else if (Ya._metrika.counter) {
			Ya._metrika.counter.hit(page);	
		}
		
	}
	if (window.gtag) {
		var trackid = dataLayer[1][1];
		gtag('config', trackid, {
			'page_path': page
		});
	} else if (window.ga) {
		ga('set', 'page', page)
		ga('send', 'pageview')
	}
})