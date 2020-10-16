/*
 * @Author: zouzongliang
 * @Date: 2020-10-16 10:24:03
 * @LastEditTime: 2020-10-16 11:12:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

/**
 * 装饰器模式:
 * 1.动态的给某个对象添加一些额外的职责，是一种实现继承的替代方案
 * 2.在不改变对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，
 * 而不会影响从这个类中派生的其他对象
 *
 *
 */


 class Callphone{
     
    create(){
        console.log('生成一个手机')
    }

 }


 class Decorator{
     constructor(callphone){
         this.callphone = new callphone()
     }
     create(){
         this.callphone.create()
         this.createShell()
     }
     createShell(){
        console.log('生成一个手机壳')
     }
 }


 let callphone = new Callphone()
 callphone.create()

 console.log('------------')

let dec = new Decorator(cellphone)
dec.create()