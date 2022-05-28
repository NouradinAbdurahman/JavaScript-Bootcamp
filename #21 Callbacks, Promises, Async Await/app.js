// Syncchronous // it will wait until the other console to run.
function otherFunction () {
    console.log("we are in another function");
    console.log("do Some stuff");
};
console.log("Start");

otherFunction();

console.log("End");

console.log("#".repeat(20));

// Asyncchronous // it will not wait until the other console to run it will run wheather the console was runed or not.
console.log("Start");

setTimeout(() => {
    console.log("we are in setTimeOut"); // what happen here is that this setTimeOut value is gonna saved in web apis so that when we need this value apear in to the page.
},1000);

console.log("End");


console.log("#".repeat(20));

// callbacks
console.log("Start");

function loginUser(email,password, callbacks) {
    setTimeout(() => {
        console.log("Now we have the data: ");
        callbacks ({userEmail: email}, {password: password});
    },1500);
};

function getUserVideo(email,callbacks) {
    setTimeout(() => {
        callbacks(["Video1", "Video2", "Video3"])
    }, 1000);
};

function videoDetals(video,callbacks) {
    setTimeout(() => {
        callbacks("title of the video")
    }, 1000);
}

let user = loginUser("n.aden1208@gmail.com", "123456", user => {
    console.log(user);
    getUserVideo(user.userEmail, videos => {
        console.log(videos);
        videoDetals(videos[0], (title) => {
          console.log(title);
        });
    });
    
});

console.log("Finish");