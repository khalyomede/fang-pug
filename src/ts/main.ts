import * as pug from "pug";
import * as rename from "rename";
import { basename } from "path";

const fangPug = options => fang => {
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
