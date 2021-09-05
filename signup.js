var fs = require('fs');
console.log("WELCOME TO SIGN UP/LOG IN PAGE")
let readlineSync = require("readline-sync");
var num = readlineSync.question("👉DO YOU HAVE AN ACCOUNT:");
if (num=="yes" ||  num=="y"){
    var read = fs.readFileSync("user_details.JSON ");
    data1 = JSON.parse(read)
    
    var user_name=readlineSync.question("enter your user ID:")                                              
    pass_word=readlineSync.question("enter your password :")
    if ( user_name.includes (data1 )||  pass_word.includes (data1)){
        console.log(user_name,"you have logged in succesfully")
    }else{
        console.log("sorry! invalid username and password")
    }
}
if (num=="no" || num=="n"){
    let readlineSync = require("readline-sync");
    var new = readlineSync.question("DO YOU WANT TO SIGN UP ACCOUNT?")
    if (new == "yes"){
        var username1=input("enter your first name :")
        var username2=input("enter your last name :")
        var name1=username1+username2
        console.log("USERNAME :",name1)
        var password1=readlineSync.question("enter your password:")
        if ("$" || "@" .includes (password1)){
            if (password1.length >= 6 && password1.length <= 16){
                if ("2" || "8" .includes (password1)){
                    pass}   
            }else{
                console.log("You are using weak password")}        
        }else{
            console.log("at least password shoud contain one special charecter")}
        password2=readlineSync.question("Conform your password:")
        if (password1!=password2){
            console.log("PASSWORD :",password1)
            console.log("both password are not same")
        }else{
            console.log("congrats",name1,"you have sign up succsefully!")
        a=[]
        a.push(name1)
        a.push(password1)
        b=["username","password"]
        let user={}
        for (let i in range(len(b))){
            user.update({b[i]:a[i]})
        let file = JSON.stringify(user_details)
        fs.writeFileSync("user_details.JSON ", file,null,4)
        console.log("we want your information")
        console.log()
        let description=readlineSync.question("enter whatever you like :")
        let Dob=readlineSync.question("enter your Date of Birth :")
        let Gender=readlineSync.question("enter your gender :")
        let Hobbies=readlineSync.question("enter your hobbies :")
        console.log()
        console.log("Thank you for giving me your information")
        let list1=["Discription","Dob","Gender","hobbies"]
        let c=[]
        c.push(description)
        c.push(Dob)
        c.push(Gender)
        c.push(Hobbies)
        let profile={}
        for (i of range(list1.length){
            profile.update({list1[i]:c[i]})
        k={"user":user,"profile":profile}
        let file = JSON.stringify(user_details)
        fs.writeFileSync("user_details.JSON ", file,null,4)
}