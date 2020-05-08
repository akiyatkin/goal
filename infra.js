import { Fire } from '/vendor/akiyatkin/load/Fire.js'
import { Layer } from '/vendor/infrajs/controller/src/Layer.js'
import { Goal } from '/vendor/akiyatkin/goal/Goal.js'
import { Seq } from '/vendor/infrajs/sequence/Seq.js'

Fire.hand(Layer, 'submit', async (layer) => {
	if (!layer.goal) return;
	if (!Seq.getr(layer, ['config','ans','result'])) return;
	Goal.reach(layer.goal);
});

Goal.ajax()