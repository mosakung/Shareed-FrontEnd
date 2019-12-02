import { httpGET, userId } from './callAPI.js';

httpGET('http://localhost:3000/shareed/homepage-user', userId, (state, json) => {
    json.reviewBook.forEach(function (data, index) {
        if (index > 1);
        else $('.fetch-review-book').append(patternReviewBook(data, index));
    })
    json.reviewSubject.forEach(function (data, index) {
        $('.fetch-review-subject').append(patternReviewSubject(data, index));
    })
    json.reviewTutor.forEach(function (data, index) {
        $('.fetch-review-tutor').append(patternReviewTutor(data, index));
    })
    json.shareEvent.forEach(function (data, index) {
        if (index == 0) $('.fetch-share-event-filp').append(patternShareEvent(data, index));
        else $('.fetch-share-event-non-filp').append(patternShareEvent(data, index));
    })
    json.shareNote.forEach(function (data, index) {
        if (index == 0) $('.fetch-share-note-filp').append(patternShareNote(data, index));
        else $('.fetch-share-note-non-filp').append(patternShareNote(data, index));
    })
    json.faq.forEach(function (data, index) {
        if (index == 0) $('.fetch-faq-filp').append(patternFaq(data, index));
        else $('.fetch-faq-non-filp').append(patternFaq(data, index));
    })

    function patternShareNote(data, index) {
        if (index == 0) return [`
        <a href="http://127.0.0.1:5500/ViewNote.html?postID=${data.ShareNoteID}" role="button"> 
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front container-fluid responsive">
                        <img src="${data.Cover}"  style=" max-width:340px; max-height:345px; min-height:345px;" ></center>
                    </div>
                    <div class="flip-card-back">
                        <h4 style="color: red;">Share Note</h4>
                        <p class="card-text">Date: ${data.Date_Time.substring(0, 10)} By: ${data.Username}</p> 
                        <h2>${data.Title}</h2> 
                    </div>
                </div>
            </div>
        </a>
        `]
        else return [`
        <div class="sm-block">
            <a href="http://127.0.0.1:5500/ViewNote.html?postID=${data.ShareNoteID}" class="card-sml responsive">
                <div class="col-sm-5 container-fluid" style="margin: 0px; padding: 0px;"> 
                    <div class="responsive"> 
                        <img src="${data.Cover}" style=" max-width:200px; max-height:160px; min-height:160px;">
                    </div>
                </div>
                <div class="col-sm-7" style="color: black; padding-left: 25px; padding-top: 10px;"> 
                    <p style="color: red; font-size: 10px; ">Share Note</p>
                    <p>${data.Title}</p> 
                    <p style="font-size: 10px; ">Date: ${data.Date_Time.substring(0, 10)} By: ${data.Username}</p> 
                </div>
            </a>
        </div>
        `]
    }

    function patternShareEvent(data, index) {
        if (index == 0) return [`
        <a href="http://127.0.0.1:5500/ViewEvent.html?postID=${data.ShareEventID}">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front container-fluid responsive">
                        <img src="${data.Cover}"  style=" max-width:340px; max-height:345px; min-height:345px;" ></center>
                    </div>
                    <div class="flip-card-back">
                        <h4 style="color: red;">Share Event</h4>
                        <p class="card-text">Date: ${data.Data_Time.substring(0, 10)}By: ${data.Username}</p> 
                        <h2>${data.Title}</h2> 
                    </div>
                </div>
            </div>
        </a>
        `]
        else return [`
        <div class="sm-block">
            <a href="http://127.0.0.1:5500/ViewEvent.html?postID=${data.ShareEventID}" class="card-sml">
                <div class="col-sm-5" style="margin: 0px; padding: 0px;"> 
                    <div class="responsive"> 
                        <img src="${data.Cover}" style="max-width:200px; max-height:160px; min-height:160px;">
                    </div>
                </div>
                <div class="col-sm-7" style="color: black; padding-left: 25px; padding-top: 10px;"> 
                    <p style="color: red; font-size: 10px; ">Share Event</p>
                    <p>${data.Title}</p> 
                    <p style="font-size: 10px; ">Date: ${data.Data_Time.substring(0, 10)} By: ${data.Username}</p> 
                </div>
            </a>
        </div>
        `]
    }

    function patternReviewSubject(data, index) {
        return [`
        <div class="sm-block" style="margin-top: 25px;">
            <a href="http://127.0.0.1:5500/ViewSubject.html?postID=${data.ReviewSubjectID}" class="card-sml">
                <div class="col-sm-12" style="color: black; padding-left: 25px; padding-top: 20px;"> 
                    <p style="color: red; font-size: 10px; ">Review Subject</p>
                    <p style="font-size: 25px;">${data.SubjectID}</p>
                    <p>${data.Title}</p> 
                    <p style="font-size: 10px; ">Date: ${data.Date_Time.substring(0, 10)}By: ${data.Username}</p> 
                </div>
            </a>
        </div>
        `]
    }

    function patternReviewBook(data, index) {
        return [`
        <div class="col-sm-6" style="margin-top: 15px;">
            <a href="http://127.0.0.1:5500/ViewBook.html?postID=${data.ReviewBookID}">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front container-fluid responsive">
                            <img src="${data.Cover}"  style=" max-width:340px; max-height:345px; min-height:345px;" ></center>
                        </div>
                        <div class="flip-card-back">
                            <h4 style="color: red;">Review Book</h4>
                            <p class="card-text">Date: ${data.date_time.substring(0, 10)} By: ${data.Username}</p> 
                            <h2>${data.Title}</h2> 
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `]
    }

    function patternReviewTutor(data, index) {
        return [`
        <div class="col-sm-4" style="margin-top: 15px;">
            <div class="bg-block" style="height:350px;">
                <a href="http://127.0.0.1:5500/ViewTutor.html?postID=${data.ReviewTutorID}" class="card-sml">
                    <div class="responsive"> 
                        <img src="${data.Cover}" style=" max-width:240px; max-height:240px; min-height:240px;">
                    </div>
                    <div class="col-sm-12" style="color: black; padding-left: 25px; padding-top: 10px;"> 
                        <p style="color: red; font-size: 10px; ">Review Tutor</p>
                        <p>${data.Title}</p> 
                        <p style="font-size: 10px; ">Date: ${data.date_time.substring(0, 10)} By: ${data.Username}</p> 
                    </div>
                </a>
            </div>
        </div>
        `]
    }

    function patternFaq(data, index) {
        if (index == 0) return [`
        <a href="http://127.0.0.1:5500/ViewFAQ.html?postID=${data.FAQID}">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front container-fluid responsive">
                        <img src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/faqFarme.png"  style=" max-width:340px; max-height:345px; min-height:345px;" ></center>
                    </div>
                    <div class="flip-card-back">
                        <h4 style="color: red;">Board FAQ</h4>
                        <p class="card-text">Date: ${data.date_time.substring(0, 10)} By:  ${data.Username}</p> 
                        <h2>${data.title}</h2> 
                    </div>
                </div>
            </div>
        </a>
        `]
        else return [`
        <a href="http://127.0.0.1:5500/ViewFAQ.html?postID=${data.FAQID}">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front container-fluid responsive">
                        <img src="https://raw.githubusercontent.com/mosakung/Shareed-FrontEnd/develop/Photo/faqFarme.png"  style=" max-width:340px; max-height:345px; min-height:345px;" ></center>
                    </div>
                    <div class="flip-card-back">
                        <h4 style="color: red;">Board FAQ</h4>
                        <p class="card-text">${data.date_time.substring(0, 10)} By:  ${data.Username}</p> 
                        <h2>${data.title}</h2> 
                    </div>
                </div>
            </div>
        </a>
        `]
    }
})