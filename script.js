$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();

      console.log('username was: ' + username);

    getGithubInfo(username);

   
  }
});
});
function apiLoaded() {
    var xmlhttp = this;
       showUser(xmlhttp);
    // xmlhttp.responseText;
}

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.addEventListener("load", apiLoaded);
  xmlhttp.open('GET', url, true);
  xmlhttp.send();

  // var data = xmlhttp.responseText;

  // console.log(data);

  // return xmlhttp;
}

function showUser(xmlhttp) {
    var userProfile = document.querySelector("#profile h2");

  if(xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);


    userProfile.innerHTML = user.login + " is GitHub user #" + user.id;

    var userLink = document.querySelector("#profile .information");
    // userLink.innerHTML = "<a class='profile' href='" + user.url + "'>GitHub Link</a>";
    var link = document.createElement("a");
    link.setAttribute("href", user.url);
    link.setAttribute("class", "profile");
    userLink.appendChild(link);

    var userImg = document.querySelector("#profile .avatar");
    //<img src="https://api.github.com/users/codebar" />
    var userAvatar = document.createElement("img");
    userAvatar.setAttribute("src", user.avatar_url);
    userImg.appendChild(userAvatar);


} else {
    // show an error
    userProfile.innerHTML = "No such user!";
}
}
