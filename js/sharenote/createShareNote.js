import { httpPOST, userId } from '../callAPI.js';

window.onload = function upload() {
    document.getElementById("create-share-note").onsubmit = function () {
        let cover = document.getElementById("cover-share-note-create").name;
        cover = 'pictureBase/' + cover;
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
            "Subject_Name": "${subjectName}",
            "Section": "${section}",
            "Instructor_Name": "${instructionName}",
            "Semeter": "${semeter}",
            "Title": "${title}",
        `;

        preBody = preBody + `"tag": [`;

        let lengthTagArray = tagArray.length;

        tagArray.forEach(function (data, index) {
            if (index == lengthTagArray - 1) preBody = preBody + `{ "TagDetail": "${data}" }`
            else preBody = preBody + `{ "TagDetail": "${data}" },`
        })

        preBody = preBody + `], "content": [`


        for (var i = 0; i < pictureArray.length; i++) {
            if (i == pictureArray.length - 1)
                preBody = preBody + `{ "Picture": "pictureBase/${pictureArray[i].name}" }`
            else preBody = preBody + `{ "Picture": "pictureBase/${pictureArray[i].name}" },`

        }

        preBody = preBody + `] }`

        const body = JSON.parse(preBody);
        
        httpPOST('http://localhost:3000/shareed/share-note', userId, body, (res, json) => {
            console.log(res);
        })
    }
}