import { httpPOST, userId } from '../callAPI.js';

window.onload = function upload() {
    document.getElementById("create-share-note").onsubmit = function () {
        let cover = document.getElementById("cover-share-note-create").value;
        let title = document.getElementById("title-share-note-create").value;
        let subjectName = document.getElementById("subject-name-share-note-create").value;
        let section = document.getElementById("section-share-note-create").value;
        let instructionName = document.getElementById("instruction-name-share-note-create").value;
        let semeter = document.getElementById("semeter-share-note-create").value;
        let tag = document.getElementById('tag-share-note-create').value;
        let pictureArray = document.getElementById('images-array-share-note').files;
        let tagArray = tag.split(/[#]/g).filter(n => n);

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
        alert(preBody);
       var test = new Array();
       for(var i = 0; i < pictureArray.length; i++){
           test.push(pictureArray[i].name);
       }

        preBody = preBody + `]}`

        const body = JSON.parse(preBody);

        httpPOST('http://localhost:3000/shareed/share-note', userId, body, (res, json) => {
            console.log(res);
        })
    }
}