function httpGetAll(url, page, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat(page);
    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {
        
        if (this.readyState == 4 && this.status == 250) {
            callback(JSON.parse(Http.responseText));
        }
    }
}

httpGetAll('http://localhost:3000/shareed/review-book/', '1', (json) => {

    json.data.forEach(function (data) {
        $('.card-articleReviewBook').append(renderCardReviewBook(data));
    })
})

function renderCardReviewBook(data, index) {
    return (
        `
        <div class="card-ReviewBook">
            <div class="card-title"> ${data.Title} </div>
            <div class="card-cover">${data.Cover} </div>
            <div class="card-datetime"> ${data.date_time}</div>
        </div>
        `
    );
}