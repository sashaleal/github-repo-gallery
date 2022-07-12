//variable “overview” div, profile information
const overview = document.querySelector(".overview");
//variable "username", GitHub username as the value
username = "sashaleal";


//async function to retrieve users info
const gitUserInfo = async function () {
 const userInfo = await fetch (`https://api.github.com/users/${username}`);
 const data = await userInfo.json();
 displayUserInfo(data);
};
//call the async function
gitUserInfo();


//new function to display the fetched user information
const displayUserInfo = function (data) {
const div = document.createElement("div");
div.classList.add("user-info");
div.innerHTML=`
 <figure>
 <img alt="user avatar" src=${data.avatar_url} />
</figure>
<div>
 <p><strong>Name:</strong> ${data.name}</p>
 <p><strong>Bio:</strong> ${data.bio}</p>
 <p><strong>Location:</strong> ${data.location}</p>
 <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
</div>
`;
overview.append(div)
};