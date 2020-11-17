///////// RETURN VALUE WILL NOT GET ////////////////
// console.log("Start");

// function userLogin(email,password){
//     setTimeout(()=>{
//         console.log("Now we have data")
//         return {useremail:email};
//     }, 5000);
// }

// const user = userLogin('vishnuprakash.pkr@gmail.com',12345);
// console.log(user);

// console.log("end")

//////////// USING CALLBACK ////////////////
console.log("Start");

function userLogin(email,password,callback){
    setTimeout(()=>{
        console.log("Now we have data")
        callback({useremail:email,pw:password});
    }, 2000);
}

const getUserData = (email,callback) => {
    callback({data: ['data','data1','data2'], mail:email})
}

const user = userLogin('vishnuprakash.pkr@gmail.com',12345,user=>{
    // console.log(user);
    let { useremail, pw } = user
    console.log(useremail + pw)

    getUserData(useremail,data =>{
        console.log(data)
        console.log(data.mail)
    })
});


console.log("end")