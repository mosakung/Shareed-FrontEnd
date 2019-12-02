import { httpIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postID");

let originalCoverState  = 1;
let originalCover;

let picArray = [];

httpIdGET('http://localhost:3000/shareed/review-tutor', postId, userId, (state, json) => {

    if (!json.cover) $('.fetch-cover-review-tutor').append(formCover_noData(json));
    else $('.fetch-cover-review-tutor').append(formCover_alreadyData(json));

    $('.fetch-owner-username').append(formOwnerAndBy(json));

    $('.fetch-form-input-all-js').append(formInputBeforeTag(json) + formTag(json) + formDescription(json));
    $('.fetch-form-content-all-js').append(formContent(json));
    originalCover = json.cover;

    json.content.forEach(function (data) {
        picArray.push(data.Picture);
    })
})

function formCover_noData(json) {
    return [`
    <div class="center "
        style="background-color: rgba(255, 255, 255, 0.37);margin-top: 50px;width: 864px;height: 294px;">
        <div id="cover-upload"></div>
        <img id="blah" src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/UploadPicture.png"
            alt="your image" class="center" />
    </div>

    <input id="cover-review-tutor-edit" type="file" onchange="readURL(this);" class="center" />
    `]
}

function formCover_alreadyData(json) {
    return [`
    <div class="center "
        style="background-color: rgba(255, 255, 255, 0.37);margin-top: 50px;width: 864px;height: 294px;">
        <div id="cover-upload"></div>
        <a id="cover-original" style="cursor: grabbing;"><img id="remove-picture-cover"
        src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/remove.png"
        onclick="cover_delete()" style="width: 50px; height: 50px; position: absolute;"></a>
        <img id="blah" src="${json.cover}"
            alt="your image" class="center" />
    </div>

    <input id="cover-review-tutor-edit" type="file" onchange="readURL(this);" class="center" />
    `]
}

function formOwnerAndBy(json) {
    return [`
    <div class="box" style="height:50px; margin-top: 10px;">
        <div class="col-sm-4">
            Owner : ${json.Username}
        </div>
        <div class="col-sm-4" style="margin-left:250px;">
            Write Down : ${json.dateTime.substring(0,10)}
        </div>
    </div>
    `];
}

function formInputBeforeTag(json) {
    return [`
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Title :
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="title-review-tutor-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="Title"
                required value="${json.title}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Tutor Name :
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="tutorname-review-tutor-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="e.g. P'xxx"
                required value="${json.tutorName}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Academy :
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="academy-review-tutor-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. kmutt tutorial club" required value="${json.academy}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Course :
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="subjectTeach-review-tutor-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. Engineering Economics" required value="${json.subjectTeacher}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Contact :
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="contactlink-review-tutor-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. address, tel no." required value="${json.contact}">
        </div>
    </div>
    `]
}

function formTag(json) {
    var body = ``;
    body = body + `<hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Tag : </label>
        <div class="col-sm-9">
            <input class="form-control" id="tag-review-tutor-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. #CPExxx #Calculus" value="`;
    json.tag.forEach(function (data, index) {
        body = body + `#${data.TagDetail}`;
    });
    body = body + `">
        </div>
    </div>
    <hr>`;
    return body;
}

function formDescription(json) {
    return [`
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Description:
        </label>
        <div class="col-sm-9">
            <textarea class="form-control" id="description-review-tutor-edit" type="text" cols=auto
                rows="10" style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="Write your description" required>
            ${json.description}</textarea>
        </div>
    </div>
    <hr>
    `]
}

function formContent(json) {
    var body = ``;
    json.content.forEach(function (data, index) {
        body = body + `
        <div id="card-upload-${index}" class="row">
            <div class="col-sm-12">
                <div class="card mt-3" style="margin-top: 5%;">
                    <a style="cursor: grabbing;"><img id="remove-picture-${index}"
                            src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/remove.png"
                            onclick="remove_picture(${index})" style="width: 50px; height: 50px; position: absolute;"></a>
                    <center><img id="blahs" src="${data.Picture}" class="center card-img-top" style="z-index: -1; max-width: 550px;"></center>
                </div>
            </div>
        </div>`
    })
    return body;
}

window.onload = function () {
    document.getElementById("edit-review-tutor").onsubmit = function () {
        let cover;
        if (originalCoverState == 1) cover = originalCover
        else if(originalCoverState == 0){
            cover = document.getElementById("cover-review-tutor-edit").value;
            cover = cover.substring(12,cover.length);
        }
        let tutorName = document.getElementById("tutorname-review-tutor-edit").value;
        let title = document.getElementById("title-review-tutor-edit").value;
        let academy = document.getElementById("academy-review-tutor-edit").value;
        let subjectTeach = document.getElementById("subjectTeach-review-tutor-edit").value;
        let contactLink = document.getElementById("contactlink-review-tutor-edit").value;
        let description = document.getElementById("description-review-tutor-edit").value;
        let tag = document.getElementById('tag-review-tutor-edit').value;
        let pictureArray = document.getElementById('picture-array-review-tutor-edit').files;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "TutorName": "${tutorName}",
            "Academy": "${academy}",
            "Subject_Teach": "${subjectTeach}",
            "ContactLink": "${contactLink}",
            "Des": "${description}",
            "Title": "${title}",
        `;

        preBody = preBody + `"tag": [`;

        tagArray.forEach(function (data, index) {
            if (index === tagArrayLength - 1) preBody = preBody + `{ "TagDetail": "${data}" }`
            else preBody = preBody + `{ "TagDetail": "${data}" },`
        })

        preBody = preBody + `], "content": [`

        for (var i = 0; i < pictureArray.length; i++) {
            if (i == pictureArray.length - 1)
                preBody = preBody + `{ "Picture": "pictureBase/${pictureArray[i].name}" }`
            else preBody = preBody + `{ "Picture": "pictureBase/${pictureArray[i].name}" },`
        }

        //NEW
        for (let i = 0; i <= deleted.length; i++) delete picArray[deleted.pop()];

        picArray = picArray.filter(n => n);

        console.log(pictureArray.length);

        for (let i = 0; i < picArray.length; i++) {
            if (!pictureArray && picArray.length == 1) preBody = preBody + `{"Picture": "pictureBase/${picArray[i]}"}`;
            else if (!pictureArray && i == picArray.length - 1) preBody = preBody + `{"Picture": "pictureBase/${picArray[i]}"}`;
            else if (!pictureArray && picArray.length > 1) preBody = preBody + `{"Picture": "pictureBase/${picArray[i]}"},`;
            else if (pictureArray.length) preBody = preBody + `,{"Picture": "pictureBase/${picArray[i]}"}`;
        }
        //

        preBody = preBody + `] }`

        console.log(preBody);

        const body = JSON.parse(preBody);

        httpPUT('http://localhost:3000/shareed/review-tutor', postId, userId, body, (res, json) => {
            console.log(res);
        })
    }
}