import { httpIdGET, userId } from '../callAPI.js';
import {removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/share-note', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;
    document.getElementById('subjectName').innerHTML = json.subjectName;
    document.getElementById('section').innerHTML = json.section;
    document.getElementById('instructionName').innerHTML = json.instructorName;
    document.getElementById('semeter').innerHTML = json.semeter;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('content').innerHTML = json.content;
    document.getElementById('numComment').innerHTML = json.countComment;

});

/*{
   shareNoteId: data[0].shareNoteID,
            cover: data[0].Cover,
            /subjectName: data[0].Subject_Name,
            /section: data[0].Section,
            /instructorName: data[0].Instructor_Name,
            /semeter: data[0].Semeter,
            /title: data[0].Title,
            userId: data[0].UserID,
            /dateTime: data[0].Date_Time,
            /Username: data[0].Username,
            /content: contentData,
            tag: tagPost,
            comment: comment,
            /countComment: countComment[0].count,
            isOwner: owner
}*/ 