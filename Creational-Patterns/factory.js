/*
 * @Author: zouzongliang
 * @Date: 2020-10-15 10:05:51
 * @LastEditTime: 2020-10-15 14:22:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

/**
 * @description: 工厂模式
 *优点:一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，
  只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。

 *缺点:每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，
 在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。

 *
 */

class Product {
    constructor() {
        this.name = name;
    }

    init() {
        console.log(init);
    }

    fun() {
        console.log(fun);
    }
}

class Factory {
    create(name) {
        return new Product(name);
    }
}

//user

let factory = new Factory();

let p = factory.create('产品1');

p.init();

p.fun();
