const fang = require("@khalyomede/fang");
const fangPug = require("./lib/main");

const pug = () =>
	fang
		.from("example/src/pug/*.pug")
		.do(fangPug())
		.save("example/dist");

const build = [pug];

module.exports = { build };
