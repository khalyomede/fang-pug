const expect = require("chai").expect;
const exec = require("sync-exec");
const { readFileSync } = require("fs");

exec("yarn fang build");

describe("fang-pug", () => {
	it("should produce an empty file if the html content is empty", () => {
		const expected = "";
		const actual = readFileSync(
			__dirname + "/../example/dist/empty.html"
		).toString();

		expect(actual).to.be.equal(expected);
	});

	it("should produce the correct html compressed content for a simple html", () => {
		const expected = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>Hello world</h1></body></html>`;
		const actual = readFileSync(
			__dirname + "/../example/dist/simple.html"
		).toString();

		expect(actual).to.be.equal(expected);
	});

	it("should produce the correct html content when using files on a file", () => {
		const expected = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>Header</h1><h1>Content</h1><h1>Footer</h1><script type="text/javascript" src="vue.js"></script></body></html>`;
		const actual = readFileSync(
			__dirname + "/../example/dist/including.html"
		).toString();

		expect(actual).to.be.equal(expected);
	});

	it("should produce the correct html content for variables and loops", () => {
		const expected = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><header><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></header></body></html>`;
		const actual = readFileSync(
			__dirname + "/../example/dist/variable-and-loop.html"
		).toString();

		expect(actual).to.be.equal(expected);
	});
});
