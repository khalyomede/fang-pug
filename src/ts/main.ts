import * as pug from "pug";
import * as rename from "rename";

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

		return file;
	});

	return fang;
};

export = fangPug;
