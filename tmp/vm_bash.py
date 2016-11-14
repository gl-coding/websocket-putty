import os
import sys
import json
import vm_bash_config

class VM_Bash:
    __commandLogPath = ""
    __pwdLogPath = ""

    def __init__(self, logPath):
        self.__commandLogPath = logPath + "usr_command.log"
        self.__pwdLogPath = logPath + "usr_pwd.log"

    def fileToStr(self, path):
        f = open(path)
        txt = f.read()
        return txt

    def jsonResult(self, result, pwd):
        data = {}
        data["result"] = result
        data["pwd"] = pwd
        jsonStr = json.dumps(data)
        return jsonStr

    def run_bash(self, env, usr_com):
        goto_workdir = "cd " + env + ";";
        #command = goto_workdir + usr_com + "> ~/usr_command.log; pwd > ~/usr_pwd.log" 
        command = goto_workdir + usr_com + " > " + self.__commandLogPath + \
                "; pwd > " + self.__pwdLogPath
        #print command
        os.system(command)

    def runAndReturn(self, env, usr_com):
        self.run_bash(env, usr_com)
        commandRes = self.fileToStr(self.__commandLogPath)
        pwdRes = self.fileToStr(self.__pwdLogPath)
        print self.jsonResult(commandRes, pwdRes)
        return self.jsonResult(commandRes, pwdRes)

def call_VM_Bash(env, command):
    logPath=vm_bash_config.logPath
    bash = VM_Bash(logPath)
    #bash.run_bash("/home/guolei", "ls")
    return bash.runAndReturn(env, command)


#call_VM_Bash("/home/guolei", "ls")
path = str(sys.argv[1])
command = str(sys.argv[2])

call_VM_Bash(path, command)
