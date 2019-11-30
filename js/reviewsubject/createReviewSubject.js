import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-review-subject").onsubmit = function () {
        let subjectId = document.getElementById("subjectId-review-subject-create").value;
        let subjectName = document.getElementById("subjectname-review-subject-create").value;
        let title = document.getElementById("title-review-subject-create").value;
        let instructorName = document.getElementById("instructorname-review-subject-create").value;
        let section = document.getElementById("section-review-subject-create").value;
        let description = document.getElementById("description-review-subject-create").value;
        let tag = document.getElementById('tag-review-subject-create').value;
        let pictureArray = document.getElementById('picture-array-review-subject-create').value;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "subjectName": "${subjectName}",
            "subjectId": "${subjectId}",
            "instructorName": "${instructorName}",
            "section": "${section}",
            "description": "${description}",
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

        httpPOST('http://localhost:3000/shareed/review-subject', userId, body, (res, json) => {
            console.log(res);
        })
    }
}