// github user finder example

$(document).ready(function() {
  $(document).on('keypress', '#username', function() {
    if (event.which === 13) { // check the key was <enter>
        var input = $(this);
        var username = input.val();
        var xmlhttp = getGithubInfo(username);

        showUser(xmlhttp);

      console.log('username was: ' + username);
    }

  });

});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = xmlhttp.responseText;


  console.log(data);
    return xmlhttp;
}

function showUser(xmlhttp) {
     var profile = document.querySelector("#profile h2");
             var info = document.querySelector("#profile .information");
                 var image = document.querySelector("#profile .avatar");


  if(xmlhttp.status === 200) {
        var json = xmlhttp.responseText;
        var user = JSON.parse(json);


        profile.innerHTML = user.login + " is GitHub user #" + user.id;


        info.innerHTML = '<a class="profile" href="https://github.com/' + user.login + '">GitHub Profile</a>';


        image.innerHTML = '<img src="' + user.avatar_url + '"/>';


  } else {

        profile.innerHTML = "<p>No such user!</p>";

        info.innerHTML = "";
        image.innerHTML = "";
    // show an error

  }


}

/*Now the user variable will contain all the information we need to update the page. Finish the function to:

Display the user’s Github id in #profile h2 - <user login> + ' is GitHub user #' + <user id>
Add a link to the user’s Github profile in #profile .information. The link should have a class profile
Add an image in #profile .avatar. To do that, you can use the avatar_url from the response.
*/























