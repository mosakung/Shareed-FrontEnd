import { htppIdGET, httpPUT, userId } from '../callAPI.js';

const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");

htppIdGET('http://localhost:3000/shareed/share-note', postId, userId, (state, json) => {
    json.data
})

function fourmInput() {
    return [`
    
    `]
}