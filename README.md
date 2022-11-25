# hexo-auto-front-matter

This plugin enables hexo to generate `title` and `date` front-matter from file name.

## Intro

The plugin works very simply. It just parse the file name and set the front-matter.

File names must follow strict formats like: `YYYY-MM-DD@Title.md`.

If the file name is in right format, the plugin will automatically extract information and generate front-matter. Otherwise, it will use file name as `title` and today's date as `date`.

## Install

```shell
npm install hexo-auto-front --save
```

OR

```shell
yarn add hexo-enhancer
```

## Reference

- [sisyphsu/hexo-enhancer: hexo enhance plugin (github.com)](https://github.com/sisyphsu/hexo-enhancer)
- [xu-song/hexo-auto-category: Generate categories automatically for each post in Hexo (github.com)](https://github.com/xu-song/hexo-auto-category)