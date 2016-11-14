var exec = require('child_process').exec;

module.exports = {
  sum:function(a, b) {
  var str = ""
  //exec('python vm_bash.py '+ pwd+' '+command+' ',function(error,stdout,stderr){
  exec('python vm_bash.py '+ "/home/guolei"+' '+"ls"+' ',function(error,stdout,stderr){
  str = stdout
  });
  var result = 0;
  result = parseFloat(a);

  return str;
  },
};
