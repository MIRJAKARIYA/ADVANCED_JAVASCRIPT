// var rect = {
//     width:100,
//     height:50,

//     draw: function(){
//         console.log("I am a rectangle")
//         this.printProperties()
//         console.log(this)
//     },

//     printProperties:function(){
//         console.log("My width is "+ this.width)
//         console.log("My height is "+ this.height)
//     }
// }



var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am a rectangle");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  };
};

var rect1 = new Rectangle(10,8); //new use করার ফলে Rectangle function এর ভেতর একটা {} তৈরি হচ্ছে এবং this টা সেই object কে রেফার করছে।
rect1.draw();
