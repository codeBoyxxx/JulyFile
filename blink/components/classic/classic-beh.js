// Behavior 行为 ，组件里面公用的代码可以放在Behavior里面，实际上是一个构造器
const classicBeh = Behavior({
  properties: {
    img: String,
    content: String,
    hidden: Boolean
  }
})

export { classicBeh}