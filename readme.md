virtual-list
=====

A mini and zero dependency virtual list library. Just for practice, do NOT recommend using in prod env.

### Installation
```
npm i @pkjy/virtual-list
```

### Usage & API
#### Constructor
- `new VirtualList(options)`
  - `data`: the content of list.Need an Array.
  - `selector`: the target element for the list. *Defaults to body.*
  - `height`: the height for the virtual list ViewPort. *Defaults to 150.*
  - `itemHeight`: the height for the virtual list component. *Defaults to 15.*
 
#### Methods
- `instance.push(data)`
Push new content to the VirtualList.

#### Event
- todo: `callback when scroll happens`

### Example
```js
import { VirtualList } from '@pkjy/virtual-list'

const data = [...new Array(1000000).keys()]

const instance = new VirtualList({ data, selector: '#app', height: 300, itemHeight: 30  })

let idx = 0
setInterval(() => {
  instance.push(`------ new line ${idx} ------`)
  idx++
}, 2000)

```

### License
MIT.