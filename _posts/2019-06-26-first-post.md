---
layout: post
title: 我ㄉblog開張ㄌwow
subtitle: 寫寫平常發生ㄉ事ㄅ 大概
author: Jack
icon: fa-star
categories: [Diary]
hide: true
---
<div>
最近又不小心碰到github.io，想到我的github.io一直被奇怪的landing page佔據，想說來寫個blog好了 <br>
目標可能是每天一篇，然後有一些學術的東c也可以寫 <br>
大概4J樣 <br>
放個自拍照<br>
<span class="image left"><img src="{{ 'assets/images/profile.jpg' | relative_url }}" alt="" /></span>
</div>



<style>
#hidden-content { padding:0 auto;}
#hidden-content #container { margin-left:10px; }
#hidden-content #container h4{
    background-color:rgba(0, 0, 0, 0);
    padding:15px;
    margin:0;
    box-shadow: 0px 0px 5px #ccc;
    position: relative;
    font-weight:100;
}

#hidden-content #container h4:hover{cursor:pointer;}

#hidden-content div.expand{
    display:none;
    margin-top:0px;
    z-index:-4;
}

#hidden-content p{ padding-top:0px; margin: 0px;}
</style>


<div id="hidden-content">
	<div id="container">
		<h4 class="click"></h4>
		<div class="expand">		
			<p>
			</p>		   
		<br />
		</div>
	</div>
</div>

<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script> 
<script> $(".click").click(function(){ $(".expand").slideToggle(); }); </script>



<!-- gallery -->
<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:500);
:root {
	/* Base font size */
	font-size: 10px;
}
*,
*::before,
*::after {
	box-sizing: border-box;
}
body {
	min-height: 100vh;
	background-color: #fafafa;
}
.container {
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
}
.heading {
	font-family: "Montserrat", Arial, sans-serif;
	font-size: 4rem;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	padding: 3.5rem 0;
	color: #1a1a1a;
}
.heading span {
	display: block;
}
.gallery {
	display: flex;
	flex-wrap: wrap;
	/* Compensate for excess margin on outer gallery flex items */
	margin: -1rem -1rem;
}
.gallery-item {
	/* Minimum width of 24rem and grow to fit available space */
	flex: 1 0 24rem;
	/* Margin value should be half of grid-gap value as margins on flex items don't collapse */
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}
.gallery-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 400ms ease-out;
}
.gallery-image:hover {
	transform: scale(1.15);
}
@supports (display: grid) {
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
		grid-gap: 2rem;
	}
	.gallery,
	.gallery-item {
		margin: 0;
	}
}
</style>


<div class="container">
	<h4 style="text-align: center;">Kobeㄉ照片</h4>
	<div class="gallery">
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/YMsI9ju.jpg" alt="Kobe">
		</div>
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/EtZzYLt.jpg" alt="Kobe">
		</div>
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/QrfPSuZ.jpg" alt="Kobe">
		</div>
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/ODG87d0.jpg" alt="Kobe">
		</div>
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/e4nM52m.jpg" alt="Kobe">
		</div>
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/Fbk7V0A.jpg" alt="Kobe">
		</div>
	</div>
</div>



<!-- 單一照片 -->
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/53dT9n4.png"><br> 




<!-- 留言板 -->

<div>
	<h3 style="text-align: center; padding-top: 30px;">留言板</h3>
</div>

<div style="max-width: 700px; margin: auto;">
<hr>
<div class="comments"><h4 class="nocomments" style="text-align: center; padding-top: 20px;">尚無留言</h4></div>
  <form id="comment" style="padding-left: 10px; padding-right: 10px;">
  	<hr style="margin-top: 25px;">
    <h3 style="text-align: center; padding-top: 30px; padding-bottom: 10px;">留個言ㄅ</h3>
    <div class="row" style="margin-top: 10px;">
        <div class="4u" style="padding-left: 5px; padding-right: 5px;">
          <input type="text" id="name" placeholder="暱稱">
        </div>
        <div class="6u" style="padding-left: 5px; padding-right: 5px;">
          <input id="message" type="text" placeholder="想說什麼">
        </div>
        <div class="2u" style="padding-left: 5px;padding-right: 5px;text-align: center;background-color: #8ebebc;border-radius: 10px;">
          <input type="submit" value="留言" style="padding: 10px;margin: 0 auto;display: block;background-image: none;background-color: #8ebebc;">
        </div>
    </div>
  </form>
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
          '<p style=" margin-bottom: 0px; font-size: 1.35em;">' + escapeHtml(newPost.message)  + '</p>' +
          '</div></div></div>');
      if(commentnum==0){
        $(".nocomments").remove();
      }          
                commentnum++;
    });

    $("#comment").submit(function() {
      if(($("#name").val()!='')&&($("#message").val()!='')){
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
      }

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
