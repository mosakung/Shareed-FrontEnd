import { httpIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postID");

let originalCover = 1;

httpIdGET('http://localhost:3000/shareed/review-subject', postId, userId, (state, json) => {

    $('.fetch-owner-username').append(formOwnerAndBy(json));

    $('.fetch-form-input-all-js').append(formInputBeforeTag(json) + formTag(json) + formDescription(json));
    $('.fetch-form-content-all-js').append(formContent(json));
})

function formOwnerAndBy(json) {
    return [`
    <div class="box" style="height:50px; margin-top: 4%;">
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
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Title : </label>
        <div class="col-sm-9">
            <input class="form-control" id="title-review-subject-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="Title"
                required value="${json.title}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Subject ID
            :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="subjectId-review-subject-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="e.g. CPExxx"
                required value="${json.subjectId}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Subject Name
            :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="subjectname-review-subject-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. 2nd semeter" required value="${json.subjectName}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Teach By :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="instructorname-review-subject-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. Aj.xxxx xxxx" required value="${json.instructorName}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Section :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="section-review-subject-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="e.g. 4"
                required value="${json.section}">
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
            <input class="form-control" id="tag-share-note-create" type="text"
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
            <textarea class="form-control" id="description-share-note-create" type="text" cols=auto
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