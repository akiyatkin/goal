import { Layer } from '/vendor/infrajs/controller/src/Layer.js'
import { Event } from '/vendor/infrajs/event/Event.js'
import { Seq } from '/vendor/infrajs/sequence/Seq.js'

Event.one('Controller.onshow', async () => {
	let { Goal } = await import('/vendor/akiyatkin/goal/Goal.js')
	Goal.ajax()

	Layer.hand('submited', async (layer) => {	
		if (!layer.goal) return;
		if (!Seq.getr(layer, ['config', 'ans', 'result'])) return;
		Goal.reach(layer.goal);
	})
})
