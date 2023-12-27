function registerUser( name:String , birthYear:number ){
    const isUnderage =checkAge(birthYear)
    if(isUnderage){
        console.log("User Registration Success")
        console.log(name + " has been registered")
    }
    else{
        console.log("User Registration Failed")
    }
}
function checkAge ( birthYear:number ){
    if (birthYear<=2005){
        return true
    }
    else{
        return false
    }

}
registerUser ("Aishu", 2004)

export { }
