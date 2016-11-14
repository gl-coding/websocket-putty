var exec = require('child_process').exec;

function execPython(pwd, command, callback){
    //./bash_module/vm_bash the dir should be like this
    exec('python ./bash_module/vm_bash.py '+ pwd + ' "' + command + '" ',function(error,stdout,stderr){
        //console.log(stdout)
        //console.log(stderr)
        var obj = JSON.parse(stdout);
        if (obj.result.length == 0){
            obj.result = stderr
        }
        obj.pwd = obj.pwd.replace(/\n/g, '')
        callback(obj)

        //console.log("stdout: " + stdout)
        //console.log("stderr: " + stderr);
        //console.log("err: " + error);
    });
}

exports.execPython = execPython;

//execPython("/home/guolei", "a", function(obj){
//    console.log(obj.pwd)
//    console.log(obj.result)
//});
