import { httpPOST, userId } from '../callAPI.js';

window.onload = function () {
    document.getElementById("create-faq").onsubmit = function () {
        let title = document.getElementById("title-faq-create").value;
        let description = document.getElementById("description-faq-create").value;
        let tag = document.getElementById('tag-faq-create').value;
        let pictureArray = document.getElementById('picture-array-faq-create').value;

        let tagArray = tag.split(/[#]/g).filter(n => n);

        let tagArrayLength = tagArray.length;

        let preBody = `{
            "description": "${description}",
            "title": "${title}",
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

        httpPOST('http://localhost:3000/shareed/review-book', userId, body, (res, json) => {
            console.log(res);
        })
    }
}