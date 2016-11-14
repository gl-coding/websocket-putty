var bash = require("./callPy");

//console.log(two.execPython("/home/guolei", "ls"));
//console.log(bash.execPython("/home/guolei", "ls"));

function fn(arg1, arg2, callback){
  var add = arg1 + arg2;
  var minux = arg1 - arg2;
  callback(add, minux); //此处决定回调函数的返回值
}

fn(10, 20, function(arg1, arg2){
  console.log(arg1 + "  " + arg2);
});
