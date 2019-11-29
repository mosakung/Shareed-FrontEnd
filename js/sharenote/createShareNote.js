import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-review-subject").onsubmit = function () {
        let cover = document.getElementById("cover-share-note").value;
        let title = document.getElementById("title-share-note").value;
        let subjectName = document.getElementById("subject-name-share-note").value;
        let section = document.getElementById("section-share-note").value;
        let instructionName = document.getElementById("instruction-name-share-note").value;
        let semeter = document.getElementById("semeter-share-note").value;
        let tag = document.getElementById('tag-share-note').value;
        let description = document.getElementById('description-share-note').value;
        let pictureArray = document.getElementById('picture-array-share-note').value;

        alert('1' + title + '2' + subjectName + '3' + section + '4' + semeter + '5' + tag + '6' + description);

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "Cover": "${cover}",
            "SubjectName": "${subjectName}",
            "Section": "${section}",
            "Insturction_Name": "${instructionName}",
            "Semeter": "${semeter}",
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

        httpPOST('http://localhost:3000/shareed/share-note', userId, body, (res) => {
            console.log(res);
        })
    }
}