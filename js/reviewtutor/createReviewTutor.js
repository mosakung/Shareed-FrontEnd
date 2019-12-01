import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-review-tutor").onsubmit = function () {
        let tutorName = document.getElementById("tutorname-review-tutor-create").value;
        let title = document.getElementById("title-review-tutor-create").value;
        let academy = document.getElementById("academy-review-tutor-create").value;
        let subjectTeach = document.getElementById("subjectTeach-review-tutor-create").value;
        let contactLink = document.getElementById("contactlink-review-tutor-create").value;
        let description = document.getElementById("description-review-tutor-create").value;
        let tag = document.getElementById('tag-review-tutor-create').value;
        let pictureArray = document.getElementById('picture-array-review-tutor-create').files;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "tutorName": "${tutorName}",
            "academy": "${academy}",
            "subjectTeacher": "${subjectTeach}",
            "contactLink": "${contactLink}",
            "description": "${description}",
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

        httpPOST('http://localhost:3000/shareed/review-tutor', userId, body, (res, json) => {
            console.log(res);
        })
    }
}