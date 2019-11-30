import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/share-event', urlParams.get("postID"), userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = json.dateTime;

    //document.getElementById('eventName').innerHTML = json.description;
    document.getElementById('location').innerHTML = json.location;
    document.getElementById('condition').innerHTML = json.condition;
    document.getElementById('register').innerHTML = json.register;
    //document.getElementById('dateAndTime').innerHTML = json.description;
    document.getElementById('description').innerHTML = json.describe;
    document.getElementById('content').innerHTML = json.content;
    document.getElementById('numComment').innerHTML = json.countComment;
});

/*{
   shareEventId: data[0].ShareEventID,
            cover: data[0].Cover,
            /register: data[0].Register,
            /location: data[0].Location,
            /condition: data[0].Condi,
            /describe: data[0].Describ,
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