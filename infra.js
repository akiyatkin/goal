Event.handler('Layer.onsubmit', async (layer) => {
	if (!layer.goal) return;
	if (!Sequence.get(layer, ['config','ans','result'])) return;
	let Load = (await import('/vendor/akiyatkin/load/Load.js')).default
	let Goal = await Load.on('import-default', '/-goal/Goal.js')
	Goal.reach(layer.goal);
});