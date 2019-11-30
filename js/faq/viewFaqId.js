import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/faq', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('numComment').innerHTML = json.countComment;
});

/*{
   faqId: data[0].FAQID,
            /title: data[0].title,
            /description: data[0].description,
            userId: data[0].UserID,
            /dateTime: data[0].date_Time,
            /Username: data[0].Username,
            tag: tagPost,
            comment: comment,
            /countComment: countComment[0].count,
            isOwner: owner
}*/ 