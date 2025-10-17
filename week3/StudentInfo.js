const dateOfBirth="12/12/1980"
const getStudentName=()=>
{
    return"Write your name here:"
}
const getCampusName=()=>
{
    return("UEL Campus")
}
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateOfBirth
exports.StudentGrade=(marks)=>
{
if (marks>50&&marks<70) return("B grade")
    else
return("A grade")
}