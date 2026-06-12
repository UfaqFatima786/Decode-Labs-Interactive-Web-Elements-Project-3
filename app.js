const followBtn = document.getElementById("followBtn");
const likeBtn = document.getElementById("likeBtn");
const themeBtn = document.getElementById("themeBtn");

const followers = document.getElementById("followers");
const likes = document.getElementById("likes");
const message = document.getElementById("message");

let followerCount = 120;
let likeCount = 45;
let isFollowing = false;

followBtn.addEventListener("click", () => {

    if (!isFollowing) {
        followerCount++;
        followers.textContent = followerCount;

        followBtn.textContent = "Following";
        followBtn.style.background = "green";

        message.textContent = "Thanks for following! 🎉";

        isFollowing = true;
    } else {
        followerCount--;
        followers.textContent = followerCount;

        followBtn.textContent = "Follow";
        followBtn.style.background = "#2196f3";

        message.textContent = "You unfollowed.";

        isFollowing = false;
    }

});

likeBtn.addEventListener("click", () => {

    likeCount++;
    likes.textContent = likeCount;

    message.textContent = "You liked this profile ❤️";
});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});