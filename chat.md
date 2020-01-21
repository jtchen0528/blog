---
title: 聊天室
subtitle: 想即時聊天都可以ㄛ
icon: fa-comments
permalink: /chat
order: 5
---

<!-- 留言板 -->

<div>
	<h2 style="text-align: center; padding-top: 30px;">聊天室</h2>
</div>

<div style="max-width: 700px; margin: auto;">
  <hr>
    <div class="logged-in">
      <form id="comment" style="padding-left: 25px; padding-right: 25px;">
        <h3 style="text-align: center; padding-top: 60px; padding-bottom: 10px;">留個言ㄅ</h3>
        <div class="row" style="margin-top: 10px;">
          <div class="10u 12u$(mobile)" style="padding-left: 5px; padding-right: 5px;">
            <input id="message" type="text" name="message" style=" padding: 10px; margin-top: 10px;" placeholder="想說什麼">
          </div>
          <div class="2u 12u$(mobile)" >
            <button type="submit" style="font-size: 20px; padding: 10px; margin-top: 10px;">送出</button>
          </div>
        </div>
      </form>
    </div>
    <div class="logged-out">
      <h4 style="text-align: center; padding-top: 60px; padding-bottom: 10px;">登入殼以聊天哦</h4>
    </div>
  <hr style="margin-top: 25px;">
  <div class="comments"><h4 class="nocomments" style="text-align: center; padding-top: 20px;">尚無對話</h4></div>
</div>


<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.1.0/js/md5.js"></script>
<script>

    const user = auth.currentUser;
    if(user){
        //console.log('user logged in: ', user);
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            setupUI(user);
        })
    } else { 
        //console.log('user logged out.');
        setupUI();
    }


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
          '<img src="https://api.adorable.io/avatars/150/' + escapeHtml(newPost.md5Email) + '@adorable.io.png" style="width: 80px; height: auto; margin-left: 30px; border-radius: 10px;"/> ' + 
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
      if($("#message").val()!=''){
        const user = auth.currentUser;
        db.collection('users').doc(user.uid).get().then(doc => {
          $.post('https://script.google.com/macros/s/AKfycbzNV6XM5rSNEWYgt22-3r5kwHCyKE9WToFMND47cPnTyRBZIasI/exec',
            {msg: doc.data().user + ' 回覆了你在 ' + window.location.pathname + ' 的貼文，留言內容：' + $("#message").val()},
            function(e){
              console.log(e);
          });
          var a = postRef.push();
          a.set({
            name: doc.data().user,
            message: $("#message").val(),
            md5Email: doc.data().user,
            postedAt: Firebase.ServerValue.TIMESTAMP
          });
          $("input[type=text], textarea").val("");
          
        });
      }
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
