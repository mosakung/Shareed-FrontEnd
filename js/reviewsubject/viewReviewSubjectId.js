import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-subject', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;
    document.getElementById('subjectID').innerHTML = json.subjectId;
    document.getElementById('subjectName').innerHTML = json.subjectName;
    document.getElementById('teachBy').innerHTML = json.instructorName;
    document.getElementById('section').innerHTML = json.section;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('content').innerHTML = json.content;
    document.getElementById('numComment').innerHTML = json.countComment;
});

/*{
    reviewSubjectId: data[0].ReviewSubjectID,
            /subjectId: data[0].SubjectID,
            /subjectName: data[0].SubjectName,
            /instructorName: data[0].Instructor_Name,
            /description: data[0].Des,
            /title: data[0].Title,
            /section: data[0].Section,
            userId: data[0].UserID,
            /dateTime: data[0].Date_Time,
            /Username: data[0].Username,
            /content: contentData,
            tag: tagPost,
            comment: comment,
            /countComment: countComment[0].count,
            isOwner: owner
}*/ 