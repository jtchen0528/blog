---
title: 聊天室
subtitle: 想即時聊天都可以ㄛ
icon: fa-comment-dots
permalink: /chat
order: 4
---

<!-- 留言板 -->

<div>
	<h2 style="text-align: center; padding-top: 30px;">聊天室</h2>
</div>

<div style="max-width: 700px; margin: auto;">
  <hr>
  <form id="comment" style="padding-left: 10px; padding-right: 10px;">
    <div class="row" style="margin-top: 10px;">
        <div class="4u" style="padding-left: 5px; padding-right: 5px;">
          <input type="text" id="name" placeholder="暱稱">
        </div>
        <div class="6u" style="padding-left: 5px; padding-right: 5px;">
          <input id="message" type="text" placeholder="想說什麼">
        </div>
        <div class="2u" style="padding-left: 5px; padding-right: 5px; text-align: center;">
          <input type="submit" value="送出" style="padding: 10px; margin: 0 auto; display: block;">
        </div>
    </div>
  </form>
  <hr style="margin-top: 25px;">
  <div class="comments"><h4 class="nocomments" style="text-align: center; padding-top: 20px;">尚無對話</h4></div>
</div>


<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.1.0/js/md5.js"></script>
<script>

$(function() {
  var ref = new Firebase("https://jack34672-f6932.firebaseio.com/"),
    postRef = ref.child(slugify(window.location.pathname));
    var commentnum = 0;
    var turns = 1;
    postRef.on("child_added", function(snapshot) {
      var newPost = snapshot.val();
      $(".comments").prepend('<div class="comment" style="max-width: 400px; margin: auto;">' +
          '<div class="row">'+
          '<div class="4u" style="padding: 0px;">' + 
          '<img src="https://www.gravatar.com/avatar/' + escapeHtml(newPost.md5Email) + '?s=100&d=retro" style="width: 80px;  border-radius: 10px; height: auto; margin-left: 30px;"/> ' + 
          '</div>'+
          '<div class="8u" style="padding: 0px;">' + 
            '<h4 style="padding-top: 10px; text-align:center; display: inline;">' + escapeHtml(newPost.name) + '</h4>' +
            '<h5 class="date" style="text-align:center; display: inline; padding-top: 10px; padding-left: 5px;">(' + moment(newPost.postedAt).fromNow() + ')</h5>'+ 
            '<h4 style="padding-top: 10px; display: inline;">：</h4>' +
          '<p style=" text-align: center; margin-bottom: 0px; font-size: 1.35em;">' + escapeHtml(newPost.message)  + '</p>' +
          '</div></div></div>');
      if(commentnum==0){
        $(".nocomments").remove();
      }          
      commentnum++;
      turns = !turns;
    });

    $("#comment").submit(function() {
      $.post('https://script.google.com/macros/s/AKfycbzNV6XM5rSNEWYgt22-3r5kwHCyKE9WToFMND47cPnTyRBZIasI/exec',
        {msg:$("#name").val() + ' 回覆了你在 ' + window.location.pathname + ' 的貼文，留言內容：' + $("#message").val()},
        function(e){
          console.log(e);
      });
      var a = postRef.push();
      a.set({
        name: $("#name").val(),
        message: $("#message").val(),
        md5Email: md5($("#name").val()),
        postedAt: Firebase.ServerValue.TIMESTAMP
      });

      $("input[type=text], textarea").val("");
      return false;
    });
});

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}


function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

</script>