import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-share-event").onsubmit = function () {
        let cover = document.getElementById("cover-share-event-create").name;
        cover = 'pictureBase/' + cover;
        let title = document.getElementById("title-share-event-create").value;
        let register = document.getElementById("register-share-event-create").value;
        let location = document.getElementById("section-share-event-create").value;
        let condition = document.getElementById("instruction-name-share-event-create").value;
        let description = document.getElementById("description-share-note-create").value;
        let tag = document.getElementById('tag-share-event-create').value;
        let pictureArray = document.getElementById('picture-array-share-event-create').files;

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
            if(index === tagArrayLength - 1 ) preBody = preBody + `{ "TagDetail": "${data}" }`
            else preBody = preBody + `{ "TagDetail": "${data}" },`
        })

        preBody = preBody + `], "content": [`

        for (var i = 0; i < pictureArray.length; i++) {
            if (i == pictureArray.length - 1)
                preBody = preBody + `{ "Picture": "pictureBase/${pictureArray[i].name}" }`
            else preBody = preBody + `{ "Picture": "pictureBase/${pictureArray[i].name}" },`

        }

        preBody = preBody + `]}`

        const body = JSON.parse(preBody);

        httpPOST('http://localhost:3000/shareed/share-event', userId, body, (res, json) => {
            window.location('http://localhost:5500/shareed/ShareEvent/1');
        })
    }
}