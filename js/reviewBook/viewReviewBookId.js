import { httpIdGET, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-book', urlParams.get("postID"), userId, (state, json) => {
    var date = json.dateTime.replace("T", " ");
    date = date.substring(0, 19);
    json.tag.forEach(data => {
        showTag(data);
    });
    json.content.forEach(data => {
        showContent(data);
    });
    
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('datetime').innerHTML = date;
    document.getElementById('writtenBy').innerHTML = json.writtenBy;
    document.getElementById('edition').innerHTML = json.edition;
    document.getElementById('link').innerHTML = json.link;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('bookName').innerHTML = json.bookName;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('numComment').innerHTML = json.countComment;
});

function showTag(data) {
    var createTag = "<a href='#' class='btn btn-info btn-sm' role='button'>" + data.TagDetail + "</a>"
    $('#tag-post').append(createTag);
}

function showContent(data) {
    var createContent = "<div class='row'>  <div class='col-sm-12'><center><img src = " + data.Picture + "></center></div></div>";
    $('#content').append(createContent);
}