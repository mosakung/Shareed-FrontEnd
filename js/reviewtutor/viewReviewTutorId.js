import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-tutor', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;
    document.getElementById('tutorName').innerHTML = json.tutorName;
    document.getElementById('academy').innerHTML = json.academy;
    document.getElementById('course').innerHTML = json.subjectTeacher;
    document.getElementById('contact').innerHTML = json.contact;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('content').innerHTML = json.contect;
    document.getElementById('numComment').innerHTML = json.countComment;
});

/*{
    "reviewTutorId": "c100000001",
    "tutorName": "ty",/
    "academy": "po",/
    "subjectTeacher": "po",/
    "description": "popopo",/
    "contact": "popopopo",/
    "title": "study",/
    "userId": "100000001",
    "dateTime": "2019-11-24T08:51:06.000Z",/
    "Username": "akarapon",/
    "contect": [],/
    "tag": [],
    "comment": [],
    "countComment": 0,/
    "isOwner": true
}*/ 