import { httpGET } from '../callAPI.js';
import {removeParam} from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

const getUrl = removeParam("page", window.location.href);

httpGET('http://localhost:3000/shareed/faq', urlParams.get("page"), (state, json) => {
    json.data.forEach(function (data) {
        $('.fetch-all-faq').append(fourmCard(data));
    });
    
    let patternPage = [``]

    patternPage = patternPage + '<a href="'+ getUrl + 'page=' + '1' + '">&laquo;</a>'

    let i;

    for (i = 1; i<=json.pageAll; i++) {
        if(i == urlParams.get("page"))  patternPage = patternPage + '<a href="'+ getUrl + 'page=' + i + '" class="active">' + i + '</a>';
        else patternPage = patternPage + '<a href="'+ getUrl + 'page=' + i + '">' + i + '</a>';

    }

    patternPage = patternPage + '<a href="'+ getUrl + 'page=' + (i-1) + '">&raquo;</a>'

    $('.fetch-page-faq').append(patternPage);

    let patternTag = [``];

    patternTag = patternTag + '<p>Tag</p>';

   json.tag.forEach(function (tempArray) {
       tempArray.forEach(function (data) {
            patternTag = patternTag + fourmTag(data);
       })
   })

    $('.fetch-tag-faq').append(patternTag);
})

function fourmCard(data) {
    return [`
    <a href="http://127.0.0.1:5500/ViewDAQ.html?postID=${data.FAQID}" role="button">
        <div class="sm-block" style="height:150px; padding: 5px;">
            <div class="row">
                <div class="col-sm-3">
                    <img src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/faqFarme.png" width="140" height="140">
                </div>
                <div class="col-sm-9" style="background-color: whitesmoke; width:390px;height: 140px; padding: 15px;">
                    <p style="color: red;">Share Note</p>
                    <p>${data.title}</p>
                    <p>Day: ${(data.date_time).substring(0,10)} By: ${data.Username}</p>
                </div>
            </div> 
        </div>
    </a>
    `]
}

function fourmTag(data) {
    return [`
    <a href="#" class="btn btn-info btn-sm" role="button">${data.TagDetail}</a>
    `]
}