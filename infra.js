Event.handler('Layer.onsubmit', async (layer) => {
	if (!layer.goal) return;
	if (!Sequence.get(layer, ['config','ans','result'])) return;
	let Goal = (await import('/vendor/akiyatkin/goal/Goal.js')).default
	Goal.reach(layer.goal);
});