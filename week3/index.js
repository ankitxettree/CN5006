//Exercise1
function EmployeeInfo(name, salary)
{
    console.log("Welcome "+name+", Your monthly salary is:"+salary)
}
const EmpSkills=(skills)=>
{
    console.log("Expert in: "+skills)
}
EmpSkills("Java")
var EmpName="John"
var EmpSalary=50000
EmployeeInfo(EmpName, EmpSalary)

//Exercise2 


//link
const student=require('./StudentInfo')
const person=require('./Person')
console.log("Student Name: "+student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.StudentGrade())
console.log("Grade is: "+student.StudentGrade(55))
person1=new person("Jimmy", "USA", "abc@gmail.com")
console.log("Using Person module", person1.getPersonInfo())
console.log("---THE END---")
//exercise 4
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
