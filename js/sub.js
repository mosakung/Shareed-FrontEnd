function httpGET(url, page, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + page);
    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(JSON.parse(Http.responseText));
        }
    }
}

function httpGET(url, postId, userId, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + postId + '/' + userId);
    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {
        if (this.readyState == 4 && this.status == 250) {
            callback(JSON.parse(Http.responseText));
        }
    }
}

function httpPOST(url, userId, body, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + userId);
    Http.open("POST", url, true);
    Http.setRequestHeader('Content-type', 'application/json');
    Http.send(JSON.stringify(body));

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(Http.responseText);
        }
    }
}

function httpPUT(url, postId, userId, body, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + postId + '/' + userId);
    Http.open("PUT", url, true);
    Http.setRequestHeader('Content-type', 'application/json');
    Http.send(JSON.stringify(body));

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(Http.responseText);
        }
    }
}

function httpDELETE(url, postId, userId, callback) {
    const Http = new XMLHttpRequest();
    url =url.concat('/' + postId + '/' + userId);
    Http.open("DELETE", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(Http.responseText);
        }
    }
}

/* httpDELETE('http://localhost:3000/shareed/review-book', 'a1000000001', '100000001', (json) => {
    console.log(json);
}) */

/* const bodyPut = {
    "Cover": "c",
    "Title": "t",
    "WrittenBy": "w",
    "Edition": "e",
    "Link": "l",
    "Des": "d",
    "BookName": "B",
    "tag": [
        {
            "TagDetail": "two"
        },
        {
            "TagDetail": "three"
        }
    ],
    "content": [
        {
            "Picture": "onePic.jpg"
        }
    ]
    };

httpPUT('http://localhost:3000/shareed/review-book', 'a1000000001', '100000001', bodyPut, (json) => {
    console.log(json);
}) */

/* httpGetById('http://localhost:3000/shareed/review-book', 'a1000000001', '100000001', (json) => {
    console.log(json);
}) */

/* httpGetAll('http://localhost:3000/shareed/review-book', '1', (json) => {

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
} */

/* const body = {
    "Cover": "covernote.jpg",
    "Subject_Name": "notetes",
    "Section": "1",
    "Instructor_Name": "t2",
    "Semeter": "1",
    "Title": "s22",
    "tag": [{
        "TagDetail": "oe"
    },
    {
        "TagDetail": "t"
    },
    {
        "TagDetail": "t"
    }
    ],
    "content": [
        {
            "Picture": "i.jpg"
        },
        {
            "Picture": "ic.jpg"
        }
    ]
};

httpPost('http://localhost:3000/shareed/share-note', 100000001, body, (json) => {
    console.log(json);
}) */