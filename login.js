var fs = require('fs');
console.log("********Welcome To Login And SignUp Page*********")
let readlineSync = require("readline-sync");
var user = readlineSync.question("👉Do you want login or signup :");
if (user =="signup"){
    user_name=readlineSync.question("enter your First Name :")
    user_name1=readlineSync.question("Enter Your Last Name" )
    var password = readlineSync.question("enter your password : ")
    if (password.length>=8 && password.length<=15){
        if (password[0].toUpperCase() == password[0]){
            if (password.includes("@") || password.includes("#")){
                if (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9")){
                    var password_1=readlineSync.question("confirm your password : ")
                    console.log(user_name,"you have successfully password")
                    if (password==password_1){
                        let readlineSync = require("readline-sync");
                        var description=readlineSync.question("Enter your description")
                        var Gender=readlineSync.question("enter your gender")
                        var Birth_Date=readlineSync.questionInt("Enter your Birth Date")
                        var Hobbies=readlineSync.question("enter your hobbies")
                        console.log("Congratulation",user_name+user_name1,"you have successfully Account SignUp")
                        var user_details = {user :{"User":user_name,"Password":password} ,profile :{"Description":description,"Gender":Gender,"Birth Date":Birth_Date ,"Hobbies":Hobbies}}
                        let file = JSON.stringify(user_details,null,4)
                        fs.writeFileSync(user_name+".json",file)
                    }else{
                        console.log("password are not same")}
                }else{
                    console.log("at least password should contain number")}
            }else{
                console.log("at least password should contain one special character")}
        }else{
            console.log("Password must be at a first letter capital")}
    }else{
        console.log("Password must be at least 15 characters long")} 
        
}else if (user == "login"){
    let readlineSync = require("readline-sync");
    user_name1 = readlineSync.question("enter the user name :-")
    password3 = readlineSync.question("enter the password :-")
    var read = fs.readFileSync(user_name1+".json");
    var data1 = JSON.parse(read)
    // user_1 = data1['user']
    if (user_name1 ==data1["user"]["User"]) {
        if ( password3== data1["user"]["Password"]) {
            console.log(data1\
            // console.log('congrates ', user_name1, 'your are Login successfully ')
            // console.log('Information ->')
            // console.log('description', "->", data1['profile']['description'])
            // console.log('DOB', '->', data1['profilo']['birth_date'])
            // console.log('Hobbies', '->', data1['profile']['Hobbies'])
            // console.log('Gender ', '->', data1['profile']['Gender'])
        } else {
            console.log("your password is not equal")
        }
    } else {
        console.log('your user_name is not correct')
    }
} else {
    console.log("It is not valid")
}





