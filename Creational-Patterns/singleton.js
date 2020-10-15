/*
 * @Author: zouzongliang
 * @Date: 2020-10-15 14:23:53
 * @LastEditTime: 2020-10-15 14:34:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */


/**
 * @description: 单例模式
 * 
 * 优点: 划分命名空间，减少全局变量
        增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护
        且只会实例化一次。简化了代码的调试和维护
 * 缺点: 由于单例模式提供的是一种单点访问，所以它有可能导致模块间的强耦合 从而不利于单元测试。无法单
        独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一个单元一起测试
 */


 class LoginForm{

    constructor(){
        this.state = 'hide'
    }

    show(){
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }

    hide(){
        if (this.state === 'hide') {
            alert('已经显示')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }

 }


 loginForm.getInstance = (()=>{
    let instance
    return ()=>{
        if(!instance){
            return instance = new LoginForm()
        }
        return instance
    }
 })()



 let obj1 = LoginForm.getInstance()
 obj1.show()
  
 let obj2 = LoginForm.getInstance()
 obj2.hide()
  
 console.log(obj1 === obj2)