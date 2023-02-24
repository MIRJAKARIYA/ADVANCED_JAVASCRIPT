/* 
1. this কোনো object এর ভেতরে ব্যবহার করা হলে সেই অব্জেক্টকেই সে রেফার করবে সবসময়।
2. this তার ভ্যালুটা নিয়ে থাকে যখন কোনো একটা execution context এর execution phase টা আসে।
3. কোনো object ছাড়া অন্য কোথাও this ব্যবহার করা হলে সে window object কে রেফার করবে।
4. যে execution context এর context এ this ব্যবহার করা হবে execution এর ঠিক আগের মুহূর্তে সে value টাকে পাবে।


*/




var rect = {
    width:100,
    height:50,

    draw: function(){
        console.log("I am a rectangle")
        this.printProperties()
        console.log(this)
    },

    printProperties:function(){
        console.log("My width is "+ this.width)
        console.log("My height is "+ this.height)
    }
}



rect.draw()




function myFunc(){
    console.log(this)
    rect.printProperties()
}

new myFunc()


var another = {
    width:47,
    height: 56,

    print:rect.printProperties
}

console.log(another.print)
another.print()