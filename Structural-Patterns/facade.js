/*
 * @Author: zouzongliang
 * @Date: 2020-10-16 16:03:59
 * @LastEditTime: 2020-10-16 16:08:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */
/**
 *  外观模式: 为子系统的一组接口提供一个一致的界面，定义了一个高层接口，这个接口使子系统更加容易使用
 *  优点:
 *  1.减少系统相互依赖。
 *  2.提高灵活性。
 *  3.提高了安全性
 *  缺点:
 *  1.不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
 */

// 兼容浏览器事件绑定

let addMyEvent = (el, ev, fn) => {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn);
    } else {
        el['on' + ev] = fn;
    }
};

// 封装接口

let myEvent = {
    // ...
    stop: e => {
        e.stopPropagation();
        e.preventDefault();
    },
};
