const utils = require("./utils");
const front = require('hexo-front-matter');
const fs = require('hexo-fs');
const dayjs = require("dayjs");


hexo.extend.filter.register('before_post_render', function (data) {
  const log = this.log;
  if (data.layout === "post") {
    const raw = front.parse(data.raw);
    if (raw.title && raw.date) return data;
    
    const metadata = utils.parseSource(data.source, log);
    log.i(`MetaData for ${data.source}: ${JSON.stringify(metadata)}`);

    if (!raw.title && metadata.title) {
      raw.title = metadata.title;
      log.i("Generate title [%s] for post [%s]", metadata.title, data.source);
    }

    if (!raw.date && metadata.date) {
      raw.date = metadata.date;
      log.i("Generate date [%s] for post [%s]", metadata.date, data.source);
    }

    let post = front.stringify(raw);
    post = "---\n" + post;
    fs.writeFile(data.full_source, post, "utf-8");
    log.i("Auto Front-matter Generation for [%s] done!", data.source);
  }
  return data;
});