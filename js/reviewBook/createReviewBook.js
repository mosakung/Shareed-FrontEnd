import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-review-book").onsubmit = function () {
        let cover = document.getElementById("cover-review-book-create").name;
        cover = 'pictureBase/' + cover;
        let writtenBy = document.getElementById("writtenBy-review-book-create").value;
        let edition = document.getElementById("edition-review-book-create").value;
        let link = document.getElementById("link-review-book-create").value;
        let bookname = document.getElementById("bookname-review-book-create").value;
        let title = document.getElementById("title-review-book-create").value;
        let description = document.getElementById("description-review-book-create").value;
        let tag = document.getElementById('tag-review-book-create').value;
        let pictureArray = document.getElementById('picture-array-review-book-create').files;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "cover": "${cover}",
            "writtenBy": "${writtenBy}",
            "edition": "${edition}",
            "link": "${link}",
            "description": "${description}",
            "bookName": "${bookname}",
            "title": "${title}",
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

        httpPOST('http://localhost:3000/shareed/review-book', userId, body, (res, json) => {
            console.log(res);
        })
    }
}