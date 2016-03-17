/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-28 10:29:24
 * @version $Id$
 */

var person={};
Object.defineProperty(person,"name",{
    configurable:false,//是否可修改
    value:"Nicholas"
});
//Object.defineProperty向对象添加新属性。当对象不具有指定的属性名称时，发生此操作。
//                      修改现有属性的特性。当对象已具有指定的属性名称时，发成此操作。
console.log(person.name);
delete person.name;//delete删除属性
console.log(person.name);
//面向对象，-数据属性-，-访问器属性-，-定义多个属性-，-读取属性的特性，Object.getOwnPropertyDescriptor()-;
//创建对象（工厂模式）;
function createPerson(name,age,job){
    var person=new Object();
    person.name=name;
    person.age=age;
    person.job=job;
    person.sayName=function(){
        console.log(this.name);
    }
    return person;
}
var person1=createPerson('Nicholas',29,'Software Enginner');
var person2=createPerson('jone',28,'teacher');
console.log(person1.sayName());
//创建对象（构造函数模式）;构造函数始终都应该以一个大写字母开头，而非构造函数用小写字母开头
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        console.log(this.name);
    }
}
var person3=new Person('Nicholas',29,'Software Enginner');
console.log(person3.sayName())
//创建对象（原型模式）;这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的它所包含方法和属性；
function Persons(){
   Persons.prototype.name='Nicholas';
   Persons.prototype.age=28;
   Persons.prototype.job='teacher';
   Persons.prototype.sayJob=function(){
      console.log(this.job);
   };
}
var person4=new Persons();
person4.sayJob();
//hasOwnProperty()判断一个属性是存在于原型中还是存在于实例中;
console.log(person4.hasOwnProperty("age"));//存在于原型！
person4.age=30;//创建实例！
console.log(person4.hasOwnProperty("age"));//存在于实例！
//更简单的原型语法；
function Personn(){};
Personn.prototype={
   name:'Nicholas',
   age:28,
   job:'Doctor',
   sayAge:function(){
      console.log(this.age);
   }
}
var friend=new Personn();
console.log(friend.age)
var person={
   name:'Nicholas',
   age:28,
   job:'DOCTOR'
}
console.log(person.age);
//动态原型模式
function People(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  if(typeof this.sayName != 'function'){  
    this.sayName=function(){
      console.log(this.name)
    };
    console.log(typeof this.sayName)//函数
  }
}
var peoples=new People('jack',20,'student')
peoples.sayName();
/////////////////////////////////////////////////////////////////////

