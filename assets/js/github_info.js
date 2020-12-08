function usernameInfo(user) {
    var username = "ifti-khan";
    return `
<h2 class="gh-username">${user.name}
<span class="small-name">
(@<a href="${user.html_url}" target="_blank">${user.login}</a>)
</span>
</h2>`;
}

function userProfilePic(user) {
    var username = "ifti-khan";
    return `
<div class="gh-profile-pic">
<a href="${user.html_url}" target="_blank">
<img src="${user.avatar_url}" alt="${user.login}" class="gh-profile_pic" />
</a>
</div>`;
}

function userOtherInfo(user) {
    var username = "ifti-khan";
    return `
<div class="gh-content">

<p><a href="https://github.com/${username}?tab=followers" target="_blank">Followers: ${user.followers}</a> <br><br>

<a href="https://github.com/${username}?tab=following" target="_blank">Following: ${user.following}</a> <br><br>

<a href="https://github.com/${username}?tab=repositories" target="_blank">Repos: ${user.public_repos}</a>
</p></div>`;
}

function userOtherInfoMobile(user) {
    var username = "ifti-khan";
    return `
<div class="gh-content-mobile">

<p class="followers-following-repo"><a href="https://github.com/${username}?tab=followers" target="_blank">Followers: ${user.followers}</a> |

<a href="https://github.com/${username}?tab=following" target="_blank">Following: ${user.following}</a> <br>

<a href="https://github.com/${username}?tab=repositories" target="_blank">Repos: ${user.public_repos}</a>
</p></div>`;
}

function repoInfo(repos) {
    if (repos.length == 0) {
        return `<div class="clearfix repo-list">No repos!</div>`;
    }

    var listItemsHTML = repos.map(function (repo) {
        return `<li>
<a href="${repo.html_url}" target="_blank">${repo.name}</a>
</li>`;
    });

    return `<div class="clearfix repo-list">
<p class="repo-heading">
<strong>Repo List</strong>
</p>
<ul class="ul-list">
${listItemsHTML.join("\n")}
</ul>
</div>`;
}

function getMyGitHubInfo(event) {
    var username = "ifti-khan";

    $("#gh-username").html(username);
    $("#gh-user-data1").html(username);
    $("#gh-user-data2").html(username);
    $("#gh-user-data3").html(username);
    $("#gh-repo-data").html(username);


    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function (firstResponse, secondResponse, thirdResponse, forthResponse, fifthResponse) {
            var usernameData = firstResponse[0];
            var userData1 = secondResponse[0];
            var userData2 = thirdResponse[0];
            var userData3 = forthResponse[0];
            var repoData = fifthResponse[0];

            $("#gh-username").html(usernameInfo(usernameData));
            $("#gh-user-data1").html(userProfilePic(userData1));
            $("#gh-user-data2").html(userOtherInfo(userData2));
            $("#gh-user-data3").html(userOtherInfoMobile(userData3));
            $("#gh-repo-data").html(repoInfo(repoData));

        },
        function (errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-username").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $("#gh-username").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            } else {
                console.log(errorResponse);
                $("#gh-username").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}

$(document).ready(function () {
    getMyGitHubInfo();
});
