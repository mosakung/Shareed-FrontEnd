import { userId, httpDELETE } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");

export function ClickDelete() {
    httpDELETE('http://localhost:3000/shareed/share-event', postId, userId, (res) => {
        const text = 'delete are ' + res;
        alert(text);
    })
}