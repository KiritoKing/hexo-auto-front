const reg = /^.?(\d{4})[-_]?(\d{2})[-_]?(\d{2}).?[-_.@# ]*(.*)$/;
const dayjs = require("dayjs");

/**
 * Parse post's source, pick up `title` and `date` field
 * @param {string} src
 * @return Object
 */
module.exports.parseSource = function (src, log) {
    let title, date;
    let parts = src.split("/");
    if (parts.length > 0) {
        let filename = parts[parts.length - 1];
        if (filename.lastIndexOf(".") >= 0) {
            filename = filename.substring(0, filename.indexOf("."));
        }
        name_parts = filename.split("@");
        if (name_parts.length > 1) {
            date = name_parts[0];
            title = name_parts[1];
        } else {
            log.w(`Wrong file name syntax: ${filename}. Use default instead.`);
            const now = dayjs().format("YYYY-MM-DD").toString();
            date = now;
            title = filename;
        }
    }
    return {title, date};
};