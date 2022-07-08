'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class VirtualList {
  constructor(opts) {
    this.data = opts?.data;
    this.selector = opts?.selector || 'body';

    this.ITEM_HEIGHT = opts?.itemHeight || 15;
    this.VIEW_PORT_HEIGHT = opts?.height || 150;

    this.viewPortClass = '.view-port';
    this.containerClass = '.container';
    this.scrollItemClass = '.virtual-scroll-item';

    this.initDom();
    this.initDomSkeleton();
    this.bindEvent();
    this.bindStyle();

    this.updateHeight();
    this.updateLayout();
  }

  getItem(index, data) {
    return `<div class="${this.getSelector(this.scrollItemClass)}" style="top:${index * this.ITEM_HEIGHT}px;">${data}</div>`
  }

  initDom() {
    this.dataDoms = this.data.map((v, idx) => this.getItem(idx, v));
  }

  initDomSkeleton() {
    var viewPortDom = document.createElement('div');
    viewPortDom.classList.add(this.getSelector(this.viewPortClass));
    var containerDom = document.createElement('div');
    containerDom.classList.add(this.getSelector(this.containerClass));
    viewPortDom.appendChild(containerDom);

    document.querySelector(this.selector).appendChild(viewPortDom);
  }

  updateHeight() {
    document.querySelector(this.containerClass).style.height = this.dataDoms.length * this.ITEM_HEIGHT + 'px';
    document.querySelector(this.viewPortClass).style.height = this.VIEW_PORT_HEIGHT + 'px';
  }

  bindEvent() {
    const self = this;
    document.querySelector(this.viewPortClass).addEventListener('scroll', function (e) {
      self.updateLayout();
    });
  }

  updateLayout() {
    const gap = document.querySelector(this.viewPortClass).scrollTop / this.ITEM_HEIGHT;
    document.querySelector(this.containerClass).innerHTML = this.dataDoms.slice(gap, this.VIEW_PORT_HEIGHT / this.ITEM_HEIGHT + gap + 1).join('');
  }

  push(data) {
    this.dataDoms.push(this.getItem(this.dataDoms.length, data));
    this.updateHeight();
    this.updateLayout();
  }

  static loadCssCode(code) {
    const CSS_MARK = 'VIRTUAL_LIST_CSS_MARK';
    if (document.querySelector(`style#${CSS_MARK}`)) return document.querySelector(`style#${CSS_MARK}`).parentNode.removeChild(document.querySelector(`style#${CSS_MARK}`))
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.id = CSS_MARK;

    style.appendChild(document.createTextNode(code));

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  }

  getSelector(data) {
    return data.slice(1)
  }

  bindStyle() {
    VirtualList.loadCssCode(`
    ${this.viewPortClass} {
      display: block;
      flex: 1 1 auto;
      height: 100%;
      max-width: 100%;
      overflow: auto;
      position: relative;
    }

    ${this.scrollItemClass} {
      left: 0;
      position: absolute;
      right: 0;
    }`);
  }
}

exports.VirtualList = VirtualList;
