const { src, dest, series, watch } = require("gulp");
const typescript = require("gulp-typescript");

const ts = () => {
	return src("src/ts/**/*.ts")
		.pipe(typescript())
		.pipe(dest("lib"));
};

const build = series(ts);
const start = () => {
	watch("src/ts/**/*.ts", series(ts));
};

module.exports = { build, start };
