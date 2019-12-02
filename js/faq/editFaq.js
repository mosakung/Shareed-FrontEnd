import { httpIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postID");

let picArray = [];

httpIdGET('http://localhost:3000/shareed/faq', postId, userId, (state, json) => {

    $('.fetch-owner-username').append(formOwnerAndBy(json));

    $('.fetch-form-input-all-js').append(formInputBeforeTag(json) + formTag(json) + formDescription(json));
    $('.fetch-form-content-all-js').append(formContent(json));

    json.content.forEach(function (data) {
        picArray.push(data.Picture);
    })
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
        <label class="col-sm-3 control-label" style="font-size: 15px; text-align: left;">Question Title :
        </label>
        <div class="col-sm-9">
            <input class="form-control" id="title-faq-edit" type="text"
                style="border: none; background-color:rgba(255, 255, 255, 0.37);"
                placeholder="Question Title" required value="${json.title}">
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
            <input class="form-control" id="tag-faq-edit" type="text"
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
            <textarea class="form-control" id="description-faq-edit" type="text" cols=auto
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
    document.getElementById("edit-faq").onsubmit = function () {
        let title = document.getElementById("title-faq-edit").value;
        let description = document.getElementById("description-faq-edit").value;
        let tag = document.getElementById('tag-faq-edit').value;
        let pictureArray = document.getElementById('picture-array-faq-edit').files;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "description": "${description}",
            "title": "${title}",
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

        httpPUT('http://localhost:3000/shareed/faq', postId, userId, body, (res, json) => {
            console.log(res);
        })
    }
}