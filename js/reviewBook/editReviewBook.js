import { httpIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postID");

let originalCover = 1;

httpIdGET('http://localhost:3000/shareed/review-book', postId, userId, (state, json) => {

    if (!json.cover) $('.fetch-cover-review-book').append(formCover_noData(json));
    else $('.fetch-cover-review-book').append(formCover_alreadyData(json));

    $('.fetch-owner-username').append(formOwnerAndBy(json));

    $('.fetch-form-input-all-js').append(formInputBeforeTag(json) + formTag(json) + formDescription(json));
    $('.fetch-form-content-all-js').append(formContent(json));
})

function formCover_noData(json) {
    return [`
    <div class="center "
        style="background-color: rgba(255, 255, 255, 0.37);margin-top: 50px;width: 864px;height: 294px;">
        <div id="cover-upload"></div>
        <img id="blah" src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/UploadPicture.png"
            alt="your image" class="center" />
    </div>

    <input id="cover-share-note-create" type="file" onchange="readURL(this);" class="center" />
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

    <input id="cover-share-note-create" type="file" onchange="readURL(this);" class="center" />
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
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Title : </label>
        <div class="col-sm-9">
            <input class="form-control" id="title-review-book-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="Title"
                required value=${json.title}>
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Book Name :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="bookname-review-book-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. calculus1" required value="${json.bookName}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Written :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="writtenBy-review-book-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. Dr.Jame Bond" required value="${json.writtenBy}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Edition :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="edition-review-book-create" type="number"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);" placeholder="e.g. 1"
                required value="${json.edition}">
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Link to Library
            :</label>
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="link-review-book-create" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="e.g. xxxxxxxxxxxx.com" required value="${json.link}">
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