/*
 * @Author: zouzongliang
 * @Date: 2020-10-16 10:24:03
 * @LastEditTime: 2020-10-16 11:25:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

/**
 * 装饰器模式:
 * 1.动态的给某个对象添加一些额外的职责，是一种实现继承的替代方案
 * 2.在不改变对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，
 * 而不会影响从这个类中派生的其他对象
 *优点:
 *装饰类和被装饰类都只关心自身的核心业务，实现了解耦。
 *方便动态的扩展功能，且提供了比继承更多的灵活性。
 *缺点:
 *多层装饰比较复杂。
 *常常会引入许多小对象，看起来比较相似，实际功能大相径庭，从而使得我们的应用程序架构变得复杂起来
 *
 */

class Callphone {
    create() {
        console.log('生成一个手机');
    }
}

class Decorator {
    constructor(callphone) {
        this.callphone = new callphone();
    }
    create() {
        this.callphone.create();
        this.createShell();
    }
    createShell() {
        console.log('生成一个手机壳');
    }
}

let callphone = new Callphone();
callphone.create();

console.log('------------');

let dec = new Decorator(cellphone);
dec.create();
