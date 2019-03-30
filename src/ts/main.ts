import * as pug from "pug";
import * as rename from "rename";
import { basename } from "path";

/**
 * Convert a pug file into its HTML counterpart using Pug.
 *
 * @param {Object} options The pug options.
 * @param {Boolean} options.compileDebug
 * @param {Boolean} options.pretty
 * @return {Fang}
 * @see https://www.npmjs.com/package/pug#options For a list of available pug options.
 */
const fangPug = (options: {
	compileDebug: boolean;
	pretty: boolean;
}): Object => fang => {
	fang.pluginName = "fang-pug";

	fang.files.map(file => {
		const fileName = basename(file.path);

		if (fang.options.debug) {
			fang.info(`rendering ${fileName}...`);
		}

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
			fang.info(`rendered ${fileName}`);
		}

		return file;
	});

	return fang;
};

export = fangPug;
