import { httpIdGET,userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/review-book', urlParams.get("postID"),userId, (state, json) => {
    document.getElementById('title').innerHTML = json.title;
});