import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-share-event").onsubmit = function () {
        let cover = document.getElementById("cover-share-event-create").value;
        let title = document.getElementById("title-share-event-create").value;
        let register = document.getElementById("register-share-event-create").value;
        let location = document.getElementById("section-share-event-create").value;
        let condition = document.getElementById("instruction-name-share-event-create").value;
        let description = document.getElementById("semeter-share-event-create").value;
        let tag = document.getElementById('tag-share-event-create').value;
        let pictureArray = document.getElementById('picture-array-share-event-create').value;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "Cover": "${cover}",
            "Resgister": "${register}",
            "Location": "${location}",
            "Condi": "${condition}",
            "Describ": "${description}",
            "Title": "${title}",
        `;

        preBody = preBody + `"tag": [`;

        tagArray.forEach(function (data, index) {
            if(index === length - 1 ) preBody = preBody + `{ "TagDetail": "${data}" }`
            else preBody = preBody + `{ "TagDetail": "${data}" },`
        })

        preBody = preBody + `], "content": [`

        let pictureArrayLength = pictureArray.length;

        pictureArray.forEach(function (data, index) {
            if(index === length - 1 ) preBody = preBody + `{ "Picture": "${data}" }`
            else preBody = preBody + `{ "Picture": "${data}" },`
        })

        preBody = preBody + `]}`

        const body = JSON.parse(preBody);

        httpPOST('http://localhost:3000/shareed/share-event', userId, body, (res, json) => {
            console.log(res);
        })
    }
}