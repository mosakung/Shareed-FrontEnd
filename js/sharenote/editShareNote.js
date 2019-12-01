import { htppIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");

htppIdGET('http://localhost:3000/shareed/share-note', postId, userId, (state, json) => {

    $('.fetch-form-share-note').append(fourmInput(json));
})

function formCover_noData(json) {
    return [`
    <div class="center "
        style="background-color: rgba(255, 255, 255, 0.37);margin-top: 50px;width: 864px;height: 294px;">
        <div id="cover-upload"></div>
        <img id="blah" src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/UploadPicture.png"
            alt="your image" class="center" />
        <input id="cover-share-note-create" type="file" onchange="readURL(this);" class="center" />
    </div>
    `]
}

function formCover_alreadyData() {
    return [`
    <div class="center "
        style="background-color: rgba(255, 255, 255, 0.37);margin-top: 50px;width: 864px;height: 294px;">
        <a style="cursor: grabbing;"><img id="remove-picture-cover"
                    src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/remove.png"
                    onclick="cover_delete()" style="width: 50px; height: 50px; position: absolute;"></a>
        <img id="blah" src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/UploadPicture.png"
            alt="your image" class="center" />
        <input id="cover-share-note-create" type="file" onchange="readURL(this);" class="center" />
    </div>
    `]
}

function fourmInput(json) {
    return [`
    
    `];
}

window.onload = function () {
    document.getElementById("edit-share-note").onsubmit = function () {
        let cover = document.getElementById("cover-share-note-edit").value;
        let title = document.getElementById("title-share-note-edit").value;
        let subjectName = document.getElementById("subject-name-share-note-edit").value;
        let section = document.getElementById("section-share-note-edit").value;
        let instructionName = document.getElementById("instruction-name-share-note-edit").value;
        let semeter = document.getElementById("semeter-share-note-edit").value;
        let tag = document.getElementById('tag-share-note-edit').value;
        let description = document.getElementById('description-share-note-edit').value;
        let pictureArray = document.getElementById('picture-array-share-note-edit').value;

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
            if (index === length - 1) preBody = preBody + `{ "TagDetail": "${data}" }`
            else preBody = preBody + `{ "TagDetail": "${data}" },`
        })

        preBody = preBody + `], "content": [`

        let pictureArrayLength = pictureArray.length;

        pictureArray.forEach(function (data, index) {
            if (index === length - 1) preBody = preBody + `{ "Picture": "${data}" }`
            else preBody = preBody + `{ "Picture": "${data}" },`
        })

        preBody = preBody + `]}`

        const body = JSON.parse(preBody);

        httpPUT('http://localhost:3000/shareed/share-note', postId, userId, body, (res, json) => {
            console.log(res);
        })
    }
}