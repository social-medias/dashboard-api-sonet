// Suppress url.parse() deprecation warning from Express dependencies
const originalEmitWarning = process.emitWarning;
process.emitWarning = function(warning, type, code, ...args) {
	if (type === 'DeprecationWarning' && code === 'DEP0169') {
		// Suppress url.parse() deprecation from dependencies
		return;
	}
	return originalEmitWarning.call(this, warning, type, code, ...args);
};

