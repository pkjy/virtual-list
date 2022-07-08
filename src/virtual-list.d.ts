declare module 'virtual-list' {
  interface options {
    data: string[]
    selector?: string
    itemHeight?: number
    height?: number
  }

  class VirtualList {
    constructor(options: options)

    public push(data: string): void

    static loadCssCode(plainCss: string): void
  }

  export = VirtualList
}