import { httpGET } from '../callAPI.js';
import {removeParam} from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

const getUrl = removeParam("page", window.location.href);

httpGET('http://localhost:3000/shareed/review-subject', urlParams.get("page"), (state, json) => {
    json.data.forEach(function (data) {
        $('.fetch-all-review-tutor').append(fourmCard(data));
    });
    
    let patternPage = [``]

    patternPage = patternPage + '<a href="'+ getUrl + 'page=' + '1' + '">&laquo;</a>'

    let i;

    for (i = 1; i<=json.pageAll; i++) {
        if(i == urlParams.get("page"))  patternPage = patternPage + '<a href="'+ getUrl + 'page=' + i + '" class="active">' + i + '</a>';
        else patternPage = patternPage + '<a href="'+ getUrl + 'page=' + i + '">' + i + '</a>';

    }

    patternPage = patternPage + '<a href="'+ getUrl + 'page=' + (i-1) + '">&raquo;</a>'

    $('.fetch-page-review-tutor').append(patternPage);

    let patternTag = [``];

    patternTag = patternTag + '<p>Tag</p>';

   json.tag.forEach(function (tempArray) {
       tempArray.forEach(function (data) {
            patternTag = patternTag + fourmTag(data);
       })
   })

    $('.fetch-tag-review-tutor').append(patternTag);
})

function fourmCard(data) {
    return [`
    <a href="http://127.0.0.1:5500/ViewSubject.html?postID=${data.ReviewSubjectID}" role="button">
        <div class="sm-block" style="height:150px; padding: 5px;">
            <div class="row">
            <div class="col-sm-1">
                </div>
                <div class="col-sm-11" style="background-color: whitesmoke; width:390px;height: 140px; padding: 15px;">
                    <p style="color: red;">Share Note</p>
                    <p style="font-size: 25px;">${data.SubjectID}</p>
                    <p>${data.Title}</p>
                    <p>Day: ${(data.Date_Time).substring(0,10)} By: ${data.Username}</p>
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