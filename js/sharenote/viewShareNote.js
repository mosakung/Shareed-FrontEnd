import { httpGET } from '../callAPI.js';
import {removeParam} from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

const getUrl = removeParam("page", window.location.href);

httpGET('http://localhost:3000/shareed/share-note', urlParams.get("page"), (state, json) => {
    json.data.forEach(function (data) {
        $('.fetch-all-share-note').append(fourmCard(data));
    });
    
    let patternPage = [``]

    patternPage = patternPage + '<a href="'+ getUrl + 'page=' + '1' + '">&laquo;</a>'

    let i;

    for (i = 1; i<=json.pageAll; i++) {
        if(i == urlParams.get("page"))  patternPage = patternPage + '<a href="'+ getUrl + 'page=' + i + '" class="active">' + i + '</a>';
        else patternPage = patternPage + '<a href="'+ getUrl + 'page=' + i + '">' + i + '</a>';

    }

    patternPage = patternPage + '<a href="'+ getUrl + 'page=' + (i-1) + '">&raquo;</a>'

    $('.fetch-page-share-note').append(patternPage);

    let patternTag = [``];

    patternTag = patternTag + '<p>Tag</p>';

   json.tag.forEach(function (tempArray) {
       tempArray.forEach(function (data) {
            patternTag = patternTag + fourmTag(data);
       })
   })

    $('.fetch-tag-share-note').append(patternTag);
})

function fourmCard(data) {
    return [`
    <a href="http://localhost:5500/ViewNote.html?postID=${data.ShareNoteID}" role="button">
        <div class="sm-block" style="height:150px; padding: 5px;">
            <div class="row">
                <div class="col-sm-3">
                    <img src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/${data.Cover}" width="140" height="140">
                </div>
                <div class="col-sm-9" style="background-color: whitesmoke; width:390px;height: 140px; padding: 15px;">
                    <p style="color: red;">Share Note</p>
                    <p>${data.Title}</p>
                    <p>Day: ${(data.Date_Time).substring(0,10)} & By: ${data.Username}</p>
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