// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("got the user")
//         // resolve({user: "NOURADDIN"});
//         reject(new Error("User not loged in!"))
//     }, 2000);
// });

// promise.then((userName) => {
//     console.log(userName)
// }).catch((error) => {
//     console.log(error.message)
// });

// console.log("#".repeat(50));

// Lets refactor the callbacks function to promise function
console.log("Start");

function loginUser(email,password) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log("Now we have the data: ");
          resolve({ userEmail: email }, { password: password });
    }, 1500);
    });
};

function getUserVideo(email) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve(["Video1", "Video2", "Video3"])
    }, 1000);
    });
};

function videoDetals(video) {
   return new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("title of the video")
    }, 1000);
   });
}
loginUser("n.aden1208@gmail.com","123456")
.then((user) => getUserVideo(user.email))
.then((videos) => videoDetals(videos))
.then((videoDetiles) => console.log(videoDetiles))

console.log("Finish");

// What if we want to excute the promises in the same time no need to wait the other one to finish. so we will use promise.all([]).

// Example
const youtube = new Promise((resolve) => {
    setTimeout(() => {
        console.log("geting data from Youtube: ");
        resolve({videos: [1,2,3,4,5]});
    }, 2000);
});

const facebook = new Promise((resolve) => {
  setTimeout(() => {
    console.log("geting data from Facebook: ");
    resolve({ user: "NOURADDIN" });
  }, 5000);
});

Promise.all([youtube,facebook]).then((result) => {
    console.log(result);
});

// instade of using synchronouns or promise to show the data we can use Asynchronouns await.
async function displayUser() {
    try {
        const loggedUser = await loginUser("n.aden1208@gmail.com", "123456");
        const videos = await getUserVideo(loggedUser.email);
        const detailes = await videoDetals(videos[0]);
    console.log(detailes);
    } catch(err) {
        console.log("We could not et the videos.")
    }
}
displayUser();