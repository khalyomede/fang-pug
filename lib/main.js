"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var pug = require("pug");
var rename = require("rename");
var path_1 = require("path");
var fangPug = function (options) { return function (fang) {
    fang.pluginName = "fang-pug";
    fang.files.map(function (file) {
        var fileName = path_1.basename(file.path);
        if (fang.options.debug) {
            fang.info("rendering " + fileName + "...");
        }
        file.content = Buffer.from(pug.render(file.content.toString(), __assign({ filename: file.path }, options)));
        file.path = rename(file.path, {
            extname: ".html"
        });
        if (fang.options.debug) {
            fang.info("rendered " + fileName);
        }
        return file;
    });
    return fang;
}; };
module.exports = fangPug;
