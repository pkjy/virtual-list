import { VirtualList } from './dist/lib.esm.js'


const data = [...new Array(1000000).keys()]

const vs = new VirtualList({ data, selector: '#app', height: 300, itemHeight: 30  })
let idx = 0
setInterval(() => {
  vs.push(`------ new line ${idx} ------`)
  idx++
}, 2000)


