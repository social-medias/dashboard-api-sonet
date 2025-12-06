const originalEmitWarning = process.emitWarning;
process.emitWarning = function(warning, type, code, ...args) {
	if (type === 'DeprecationWarning' && code === 'DEP0169') {
		return;
	}
	return originalEmitWarning.call(this, warning, type, code, ...args);
};