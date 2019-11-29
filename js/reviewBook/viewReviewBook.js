import { httpGET } from '../callAPI';

httpGET(url, page, (state, data) => {
    $('.fetch-all-review-book').append(fourmCard(data));
    $('.page').append(fourmPage(data));
})

function fourmCard () {
    return {

    }
}

function fourmPage () {
    return {

    }
}