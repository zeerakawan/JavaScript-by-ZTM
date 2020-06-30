var database = [
    {
        userName: "zeerak.awan",
        password: "12345",
    },
    {
        userName: "naseer.awan",
        password: "123456",
    },
    {
        userName: "hassan.awan",
        password: "1234567",
    }
]
var newsFeed = [
    {
        userName: "zeerak.awan",
        timeline: "Hello World",
        age: "20",
    },
    {
        userName: "naseer.awan",
        timeline: "Hello World",
        age: "25",
    },
    {
        userName: "hassan.awan",
        timeline: "Hello World",
        age: "15",
    }
]

function validUser(user, pass) {
    for (i=0; i< database.length; i++) {
        if(database[i].userName === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (validUser(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("You have typed wrong user name and password!!!");
    }
}

var userNamepromt = prompt("What's your user name?");
var userPasswordpromt = prompt("What's your password?");

signIn(userNamepromt, userPasswordpromt);