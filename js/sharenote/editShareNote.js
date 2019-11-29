import { htppIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");

htppIdGET('http://localhost:3000/shareed/share-note', postId, userId, (state, json) => {

    $('.fetch-form-share-note').append(fourmInput(json));
})

function fourmInput(json) {
    return [`
    <form name="edit-share-note" id="edit-share-note">
        Title : <input id="title-share-note-edit" type="text" name="title"
            style="border: none; background-color:rgba(255, 255, 255, 0.37);" value="${json.data.Title}"><br>
        <hr>
        Subject Name: <input id="subject-name-share-note-edit" type="text" name="subjectName"
            style="border: none; background-color:rgba(255, 255, 255, 0.37);" value="${json.data.SubjectName}"><br>
        <hr>
        Section : <input id="section-share-note-edit" type="text" name="section"
            style="border: none; background-color:rgba(255, 255, 255, 0.37);" value="${json.data.Section}"><br>
        <hr>
        Instruction Name : <input id="instruction-name-share-note-edit" type="text" name="instructionName"
            style="border: none; background-color:rgba(255, 255, 255, 0.37);" value="${json.data.InstructionName}"><br>
        <hr>
        Semeter : <input id="semeter-share-note-edit" type="text" name="semeter"
            style="border: none; background-color:rgba(255, 255, 255, 0.37);" value="${json.data.Semeter}">
        <hr>`
        +//tag
        `Tag : <input id="tag-share-note-edit" type="text" name="tag" style="border: none; background-color:rgba(255, 255, 255, 0.37);">
        <hr>`
        +
        `Description :
        <br>
        <br>
        <div>
            <textarea id="description-share-note-edit" name="subject" cols="90" rows="20"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);margin-left:50px;">
    </textarea>`
        +//picture
        `insert picture <input type="image" name="description" multiple>
            <hr>`
        +
        `</div>
        <div class="row">
            <div class="col-sm-1">
                <button type="button" class="btn btn-danger btn-lg"
                    style="font-size:20px;border: none;margin-left: 620px;">Cancel</button>
            </div>
            <div class="col-sm-1">
                <input type="submit" value="Save" class="btn btn-primary btn-lg "
                    style="font-size:20px;border: none;margin-left: 670px;">
            </div>
        </div>
    </form>`
            ];
}

window.onload = function() {
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

        httpPUT('http://localhost:3000/shareed/share-note', postId, userId, body, (res, json) => {
            console.log(res);
        })
    }
}