const chal = require("chalk")
const deal = require("./deal")
const add =(userInfo)=>{
    const user = deal.read()
    userInfo.accountNumber = Date.now()
    user.push(userInfo)
    deal.write(user)
    console.log(chal.green("you have account now cong"))
}
const addOperation = (type , value ,acountNum)=>{
    const users = deal.read()
    const userIndex = users.findIndex(u=> u.accountNumber== acountNum)
    // user = users[userIndex]
    // console.log(user)
    if(type === "withdraw"){
        if(+users[userIndex].balance  < value){
            console.log(chal.red("sorry u dont have enough money"))
        }else{
            users[userIndex].balance =+users[userIndex].balance - value
        }
    }else if(type === "add"){
        console.log("flag")
        users[userIndex].balance = +users[userIndex].balance + value
        console.log(chal.green("now you have mony"))
        
    }
    deal.write(users)
}
module.exports ={add, addOperation}