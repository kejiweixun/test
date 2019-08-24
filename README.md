自学前端, 亲自写项目可能是最好的学习方法, 随便找了[一个页面](https://www.figma.com/c/plugin/741472919529947576/SkewDat)模仿着[还原出来](https://kejiweixun.github.io/1st-learning-project/).

## 所用知识

* react \ create-react-app
* 第三方库 react router dom
* 第三方库 styled-components
* css grid \ felx layout
* 部署

之前已大概了解过 create-react-app 的[工作原理](https://github.com/kejiweixun/react-app-dev-env), 所以直接用它搭建环境. 组件化的开发方式确实很方便, 一开始就想着什么什么可以写成组件, 以至于组件好像写得太细了, 后来又懒得拆分, 通通写到一个文件, 缺乏规划, 下次应该可以改善. 比如 button 和 link 组件刚开始就固定了它们的样式, 但在其他地方使用它需要另一种样式, 不过后来发现可以用 styled-components 通过 props 传值的方法定制样式规则, 事实上基本所有 css 样式都用 styled-components 写.

这个学习项目其实有两个页面, 桌面视图点左上角的 logo, 移动视图点顶部文字可以切换到另一个页面, 这是 react router dom 的功劳. 之前大概了解过 react router dom, 不过亲自用过之后才对 BrowserRouter\Link\Route\Switch 这些东东有更多认识. Link 就像 `<a>`, 用于给页面上的某个元素添加一个链接, Route 是在 Link 的基础上, 把这个链接和某个要跳转显示的内容绑定在一起, 这两个要写在 Router 之内, 它们所绑定的链接的前缀可以用 Router 的 basename 属性设定, 在部署到 github pages 或自建的服务器上时, 通常要定义 basename.
  
第二个页面用了 grid 布局, 如果 grid 的 column 数量自动变化, 可以通过 `grid-column: 1 / -1` 让元素总是占据整行. 为了实现 responsive 自适应的效果, 反复调整了 grid\flex 相关的规则. 不过在手机看效果依然不太好, 要实现一模一样的效果应该需要用到一些我还没有学过的知识, 所以这是我下一步需要了解的内容. (2019/8/18 更新: 已通过 media query 解决这个问题.)

按照 create-react-app 的文档把这个学习项目部署到了[腾讯云](https://project.kejiweixun/project1)和 [GitHub Pages](https://kejiweixun.github.io/1st-learning-project), 在腾讯云用 Node 搭建了一个只有几行代码的 web server, 只是传输一下静态文件而已, 部署需要注意在项目的 package.json 文件设置 homepage 入口, 这个入口和上面提到的 basename 呼应.

## 解决 react router 刷新 url 显示 404 的问题

部署到 [GitHub Pages](https://kejiweixun.github.io/1st-learning-project) 会出现刷新 url 显示 404 的问题, 具体点说, 访问 `https://kejiweixun.github.io/1st-learning-project`, 点击顶部的导航进入第二个页面能正常显示, 但这时候刷新浏览器, 就会提示 404.

关于这个问题的详细描述和多种解决方案, 可以在 [stack overflow](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) 查看.

部署到 github 可以通过 Hash History 解决这个问题, 缺点是 url 有点丑, 多了一个 `#` 符号, 例如 `http://example.com/#/about`.

部署到 nodejs 服务器的话, 有几种解决方案, 比较简单的是定义一个新 route, 当用户访问 `http://example.com/` 或 `http://example.com/about` 等等, 通通 response index.html. 我部署到腾讯云的版本就用了这种方法, 里面有一段这样的代码:
```
router.get('/:path', async ctx => (
  const data = await fs.readFile(path.join(__dirname, 'index.html'), 'utf8');
  ctx.body = data;
))
```
