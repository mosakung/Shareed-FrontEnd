import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-tutor', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;

});

/*{
    "reviewTutorId": "c100000001",
    "tutorName": "ty",
    "academy": "po",
    "subjectTeacher": "po",
    "description": "popopo",
    "contact": "popopopo",
    "title": "study",
    "userId": "100000001",
    "dateTime": "2019-11-24T08:51:06.000Z",
    "Username": "akarapon",
    "contect": [],
    "tag": [],
    "comment": [],
    "countComment": 0,
    "isOwner": true
}*/ 