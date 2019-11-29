export function httpGET(url, page, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + page);
    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(true, JSON.parse(Http.responseText));
        }
    }
}

export function httpIdGET(url, postId, userId, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + postId + '/' + userId);
    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {
        if (this.readyState == 4 && this.status == 250) {
            callback(true, JSON.parse(Http.responseText));
        }
    }
}

export function httpPOST(url, userId, body, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + userId);
    Http.open("POST", url, true);
    Http.setRequestHeader('Content-type', 'application/json');
    Http.send(JSON.stringify(body));

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(true, Http.responseText);
        }
    }
} 

export function httpPUT(url, postId, userId, body, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + postId + '/' + userId);
    Http.open("PUT", url, true);
    Http.setRequestHeader('Content-type', 'application/json');
    Http.send(JSON.stringify(body));

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(true, Http.responseText);
        }
    }
}

export function httpDELETE(url, postId, userId, callback) {
    const Http = new XMLHttpRequest();
    url = url.concat('/' + postId + '/' + userId);
    Http.open("DELETE", url, true);
    Http.send();

    Http.onreadystatechange = function (temp) {

        if (this.readyState == 4 && this.status == 250) {
            callback(true, Http.responseText);
        }
    }
}