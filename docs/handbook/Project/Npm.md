# NPM学习

## npm 工作流

### 通配符

```json
{
  "lint1": "jshint *.js"
 "lint2": "jshint **/*.js"
}
```

> `*`表示任意文件名，`**`表示任意一层子目录。

### 多个 npm script串行并行

```json
"scripts": {
    "lint:js": "eslint *.js",
    "lint:css": "stylelint *.less",
    "lint:json": "jsonlint --quiet *.json",
    "lint:markdown": "markdownlint --config .markdownlint.json *.md",
    "mocha": "mocha tests/",
    "test": "npm run lint:js &&  npm run lint:css && npm run lint:json && npm run lint:markdown && mocha tests/",
   "test1": "npm-run-all --parallel lint:* mocha"
  },
```

>&& 表示串行，但是如果其中一个子进程发生异常将终止进程
>& 表示并行，所有的
>wait 是一个shell命令，它能保持等待状态， 直到指定进程运行完成，而且返回进程的退出状态值。 而且Wait命令还可以用于等待特定的进程ID和作业ID并返回其终止状态。
>
>npm-run-all npm内部处理了shell的串行,其中内部也处理了& wait
>
>npm-run-all ---parallel 表示并行

并行会出现子进程之间运行时间差异较大的情况，导致运行时间最长的子进程在程序结束后输出。

<img :src="$withBase('/images/npm1.png')">

加上关键词wait，并行会出现子进程之间运行时间差异较大的情况，可以等到所有的子进程都完成了再退出程序。

<img :src="$withBase('/images/npm2.png')">

## FAQ

```json
{
 "scripts": {
  "start": "webpack"
 }
}
```

### npm run start 中的webpack从哪里来的？

[文档](https://docs.npmjs.com/cli/v8/commands/npm-run-script)

instead of

```shell
{
 "scripts": {
  "start": "node_modules/.bin/webpack"
 }
}
```

其实就是npm run 默认把`node_modules/.bin`加到`PATH`环境变量中

>npm 脚本的原理非常简单。每当执行`npm run`，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

### node_modules/.bin是从哪里来的？

当某个模块配置了 `bin` 定义时，就会被安装的时候，自动软链了过去。其中文件内容都是针对模块内进行操作。非.bin

```json
{
  "bin": {
    "webpack": "bin/webpack.js"
  },
}
```

[bin](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bin)

### npx与npm有什么区别

npx是用于命令行的寻址(当执⾏ npx xxx 的时候，npx先看xxxz在$PATH⾥有没有，如果没有，找当前⽬录的 node_modules ⾥有没有，如果还是没有，就安装这个xxx 来执⾏。)
