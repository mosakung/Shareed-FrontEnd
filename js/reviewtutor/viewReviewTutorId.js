import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-tutor', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;
    document.getElementById('blah').innerHTML = json.cover;
    document.getElementById('tutorName').innerHTML = json.tutorName;
    document.getElementById('academy').innerHTML = json.academy;
    document.getElementById('course').innerHTML = json.subjectTeacher;
    document.getElementById('contact').innerHTML = json.contact;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('content').innerHTML = json.contect;
    document.getElementById('numComment').innerHTML = json.countComment;

});


/*{
    reviewTutorId: data[0].ReviewTutorID,
           / tutorName: data[0].TutorName,
           / academy: data[0].Academy,
           / subjectTeacher: data[0].Subject_Teach,
            /description: data[0].Des,
           / contact: data[0].ContactLink,
           / title: data[0].Title,
           / cover: data[0].Cover,
            userId: data[0].UserID,
            /dateTime: data[0].Date_Time,
           / Username: data[0].Username,
           / contect: contentData,
            tag: tagPost,
            comment: comment,
           / countComment: countComment[0].count,
            isOwner: owner
}*/ 