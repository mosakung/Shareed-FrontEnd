import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-tutor', urlParams.get("postID"), userId, (state, json) => {
    var date = json.dateTime.replace("T", " ");
    date = date.substring(0, 19);
    json.tag.forEach(data => {
        showTag(data);
    });
    json.contect.forEach(data => {
        showContent(data);
    });
    
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;
    document.getElementById('blah').innerHTML = json.cover;
    document.getElementById('tutorName').innerHTML = json.tutorName;
    document.getElementById('academy').innerHTML = json.academy;
    document.getElementById('course').innerHTML = json.subjectTeacher;
    document.getElementById('contact').innerHTML = json.contact;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('numComment').innerHTML = json.countComment;

});

function showTag(data) {
    var createTag = "<a href='#' class='btn btn-info btn-sm' role='button' style='margin-left: 10px'>" + data.TagDetail + "</a>"
    $('#tag-post').append(createTag);
}

function showContent(data) {
    var createContent = "<div class='row'>  <div class='col-sm-12'><center><img src = " + data.Picture + "></center></div></div>";
    $('#content').append(createContent);
}