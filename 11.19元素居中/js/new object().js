/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-19 18:19:47
 * @version $Id$
 */


function displayInfos(a){
		var output='';
		if(typeof a.name=="string"){
			output+='name:'+a.name+'\n';
		}
		if(typeof a.age=='number'){
			output+='age:'+a.age+'\n';//'\n'表示的换行
		}
		console.log(output)
	}
	 var a={
		name:"name",
		age:10
	};
	var b={
		name:'xiaozhang'
	}
	displayInfos(a);
	displayInfos(b);
	// console.log(a['name'])

	// 添加数组或移除数组
	var color=['red','yellow','black','white'];
	console.log(color.length);
	color.legth=5;color[4]='green';
	["red", "yellow", "black", "white", "green"];
	console.log(color.length);
	console.log(color instanceof Array);//判断一个对象是不是数组
	console.log(Array.isArray(color));//判断一个对象是不是数组

	//数组类型的转换
	console.log(color.toString());	
 	console.log(color.toLocaleString());
 	console.log(color.valueOf());
 	//栈方法 push()//pop();
 	var a='blue';
 	console.log(color.push(a))//push()方法可以接收任意数量的参数，把他们逐个添加到数组的末端，并返回数组的长度。
 	console.log(color.pop())//pop()方法则从数组的末端移除最后一项，减少数组的length的值，并返回移除的项。
	//队列方法
	var color=new Array();
	var count=color.push('a','b');
	console.log(count);
	var count=color.push('black');
	console.log(count);
	//shift()
	var item=color.shift();//shift()它能够移除数组中的第一个项并返回被移除项，同时将数组的长度减1；
	var items=color.unshift('sss');//shift()它能够移除数组前端添加任意个项，同时返回数组长度；
	console.log(item);
	console.log(color.length);
	//重新排序的方法 reverse()和sort()方法
	//reverse()方法会反转数组的顺序;
	//sort()方法会以升序的方法 重新排列数组的顺序，它会调用每个数组项的tostring()转型方法，然后比较得到的字符串，以确定如何排序。
	var values =[1,5,3,2,4];
	console.log(values);
 	values.reverse();
	console.log(values);
	values.sort();
	console.log(values);
	//引用类型
	//创建object实例的方式有两种。第一种是使用new操作符后跟object构造函数，第二种是使用对象字面量的方法。
	//第一种方法
	var person=new Object();
		person.name='xiaozhang';
		person.age=22;	
	//第二种方法
	var person={
		name:'xiaozhang',
		age:22	//最后一个不能加逗号。
	}
	var i 	= 1,
 	    sum = 0;
 	    sum = sum + i; //这个意思
 	    sum += i; //这是简写
