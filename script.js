// github user finder example

    var xmlhttp = new XMLHttpRequest();


$(document).ready(function() {
    $(document).on("keypress", "#username", function() {
        // checks if the key is [return]
        if (event.which === 13) {
            console.log("enter pressed");
            var input = $(this);
            var username = input.val(); // get the value from the input element

            console.log("username is: " + username);
        }
    });
    getGithubInfo();
    showUser();
});

function getGithubInfo(username) {
    var url = "https://api.github.com/users/" + username;

    // var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false); // false will run a request synchronously - the browser will wait for the call the Github API
    xmlhttp.send();

    var data = xmlhttp.responseText;

    console.log(data);

    return xmlhttp;
}

function showUser(xmlhttp) {
    // checks if the status code is 200 (OK)
    if (xmlhttp.status === 200) {
        console.log("Status 200");
        // show the user details
        var json = xmlhttp.responseText;
        var user = JSON.parse(json);
    } else {
        // throw an error
    }
}
