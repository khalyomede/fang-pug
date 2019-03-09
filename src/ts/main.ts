import * as pug from "pug";
import * as rename from "rename";
import * as cliColor from "cli-color";
import * as fancyLog from "fancy-log";

const fangPug = options => fang => {
	fang.files.map(file => {
		file.content = Buffer.from(
			pug.render(file.content.toString(), {
				filename: file.path,
				...options
			})
		);

		file.path = rename(file.path, {
			extname: ".html"
		});

		if (fang.options.debug) {
			fancyLog.info(`${cliColor.magenta(file.path)}: turned into html`);
		}

		return file;
	});

	return fang;
};

export = fangPug;
