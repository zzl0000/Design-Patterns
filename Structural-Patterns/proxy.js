/*
 * @Author: zouzongliang
 * @Date: 2020-10-16 11:27:27
 * @LastEditTime: 2020-10-16 15:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

/**
 * 代理模式:
 * 是为一个对象提供一个代用品或占位符，以便控制对它的访问
 * 优点:
 * 1.代理模式能将代理对象与被调用对象分离，降低了系统的耦合度。代理模式在客户端和目标对象之间起到一个中介作用，这样可以起到保护目标对象的作用
 * 2.代理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；
 * 缺点:
 * 1.处理请求速度可能有差别，非直接访问存在开销
 */

let Flower = () => {};

let xiaomin = {
    sendFlower: target => {
        let flower = new Flower();
        target.receiveFlower(flower);
    },
};

let B = {
    receiveFlower: flower => {
        A.listenGoodMood(() => {
            A.receiveFlower(flower);
        });
    },
};

let A = {
    receiveFlower: flower => {
        console.log('收到花' + flower);
    },
    listenGoodMood: fn => {
        setTimeout(function () {
            fn();
        }, 1000);
    },
};

xiaoming.sendFlower(B);
