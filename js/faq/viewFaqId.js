import { httpIdGET, userId } from '../callAPI.js';
import { removeParam } from '../removeParam.js';

const urlParams = new URLSearchParams(window.location.search);

httpIdGET('http://localhost:3000/shareed/faq', urlParams.get("postID"), userId, (state, json) => {
    
    console.log(json);
    
    var date = json.dateTime.replace("T", " ");
    date = date.substring(0, 19);
    checkOwner(json.isOwner);
    json.tag.forEach(data => {
        showTag(data);
    });
    json.content.forEach(data => {
        showContent(data);
    });
    json.comment.forEach(data=>{
        showComment(data);
   });
    
    document.getElementById('title').innerHTML = json.title;
    document.getElementById('owner').innerHTML = json.Username;
    document.getElementById('writeDown').innerHTML = date;
    document.getElementById('description').innerHTML = json.description;
    document.getElementById('numComment').innerHTML = json.countComment;
});

function showTag(data) {
    var createTag = "<a href='#' class='btn btn-info btn-sm' role='button' style='margin-left: 10px'>" + data.TagDetail + "</a>"
    $('#tag-post').append(createTag);
}

function showContent(data) {
    var createContent = "<div class='row'>  <div class='col-sm-12'><center><img src = " + data.Picture + "></center></div></div>";
    $('#content').append(createContent);
}

function showComment(data) {
    var date = data.Date_Time.replace("T", " ");
     date = date.substring(0, 19);
     var showEdit = false;
     var showReport = "none";
      if (data.UserID != userId) {
          showEdit = "none";
          showReport = false;
      }
  
      var createComment = `
      <li class='list-group-item'> <div class='row'> <div class='col-sm-2'>
          <img src='http://placehold.it/80' class='img-circle img-responsive'alt=''></div>
          <div class='col-sm-10'>
              <div class='row'>
                  <div class='col-sm-10' style='font-size:20px;'>` + data.Username + `</div>
                  <div class='col-sm-2'>
                      <a href='#' class='btn btn-primary btn-xs' title='Edited' style="display: ` + showEdit + `;"><span
                              class='glyphicon glyphicon-pencil'style="display: ` + showEdit + `;"></span></a>
                      <a href='#' class='btn btn-danger btn-xs' title='Deleted' style="display: ` + showEdit + `;"><span
                              class='glyphicon glyphicon-trash' style="display: ` + showEdit + `;"></span></a>
                      <a href='#' class='btn btn-info btn-outline-secondary btn-xs' title='Report' style='background-color:rgba(119, 117, 117, 0.664);display: ` + showReport + `;'>Report</a>
                  </div>
              </div>
              <div class='comment-text'>
                  &nbsp&nbsp&nbsp ` + data.Detail + `
              </div>
              <br>
              <div class='row'>
                  <div class='col-sm-9'></div>
                  <div class='col-sm-3'style='font-size:12px;'>`+ date + `</div>
              </div>
          </div>
      </div>
  </li>`
  
      $('#allComment').append(createComment);
  }
  
  function checkOwner(data) {
      if (data == true) {
          document.getElementById('report').style.display = 'none';
         // document.getElementById('favourite').style.display = 'none';
      }
      else if (data == false) {
          document.getElementById('deletePost').style.display = 'none';
          document.getElementById('editPost').style.display = 'none';
      }
  }