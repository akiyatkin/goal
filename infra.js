Event.handler('Layer.onsubmit', function (layer) {
	if (!layer.goal) return;
	if (!Sequence.get(layer, ['config','ans','result'])) return;

	Goal.reach(layer.goal);
});