/*
 * @Author: zouzongliang
 * @Date: 2020-10-15 10:06:28
 * @LastEditTime: 2020-10-16 10:26:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

/**
 *  适配器模式: 将一个类的接口转化为另外一个接口，以满足用户需求，
 *  使类之间接口不兼容问题通过适配器得以解决。
 *  优点: 可以让任何两个没有关联的类一起运行、提高类的复用、
 *  适配对象、适配库、适配数据
 *  缺点: 额外对象的创建、非直接调用、存在一定开销
 *  如果没必要使用适配器模式的话，可以考虑重构，如果使用的话，尽量把文档完善
 */

class Plug {

    getName(){
        return 'iphone 充电头'
    }

}



class Target{

    constructor(){
        this.plug = new Plug()
    }

    getName() {
        return this.plug.getName() + ' 适配器Type-c充电头';
    }
}


let target = new Target();
target.getName(); // iphone充电头 适配器转Type-c充电头