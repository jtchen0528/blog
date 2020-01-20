---
layout: post
title: 黑蘋果簡易安裝教學
subtitle: 來玩玩看mac吧！
author: Jack
icon: fa-apple-alt
categories: [Articles]
comment: true
---

黑蘋果Hackintosh安裝教學(GL552VW)
macOS裝在ASUS筆電好潮ㄛ><

首先，要準備一個8GB以上的隨身碟，還有一台windows電腦。<br>
在windows上安裝[balenaetcher](https://www.balena.io/etcher/)，還有下載這個檔案：[Mojave 10.14.3](https://drive.google.com/drive/folders/1qR7NbQs0Hkzl0JeCe4NhGTHmXkZ0vThL?usp=sharing)，不用解壓縮。<br>
這個mojave安裝檔是一個應該是俄羅斯人給我的，目前用了沒什麼問題。

接著確認你的隨身碟沒有任何重要的東西了，就用balenaetcher把那個檔案flash到隨身碟裡。<br>
再來，你要去找一下有沒有你的電腦型號已經有人裝過Hackintosh，如果有，直接把隨身碟裡的CLOVER資料夾刪除掉，把他的CLOVER複製到隨身碟裡。<br>
找CLOVER時，要注意一下有沒有分preinstall的`config.plist`，因為安裝時是用一個config，安裝後是用另一個config。<br>
所以你的目標是先找到一個你可以安裝成功的CLOVER。

用這個方法就可以不用先裝虛擬機用`Unibeast`來製作開機隨身碟了。那樣超級麻煩。

再來要切硬碟。右鍵點開始圖示，選擇磁碟管理。<br>
我只給我的macOS 150GB的空間，就從D槽壓縮出150GB，格式隨便選。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/ep3TzSE.png"><br>

接著就可以進入關機進入安裝的程序囉。

在開機時瘋狂按f1f2(一起按)，會進入華碩的boot，每台電腦進入boot的方式不一樣。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/ZdeyG1r.png"><br>

選擇你的隨身碟後(通常是UEFI開頭，選錯就重開機就好了)，會進入CLOVER這個boot loader。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/EWQwSEI.png"><br>

接著要選擇`boot macOS from USB`之類的，或是`Boot macOS Install from Install macOS Mojave`。<br>
如果你的CLOVER裡的`config.plist`有一個以上，可能其中一個是安裝前的，你就要用方向鍵選擇option->config->選擇安裝前的config。
按enter之前先按一下空白鍵，把`-v`的選項勾起來，才能看到你出了甚麼問題。<br>
接著會跑出一堆亂碼。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/Idpdh8v.png"><br>

如果你的CLOVER成功了，就會進入macOS的安裝畫面，如果失敗了，就請自己google為甚麼吧。<br>
如果你查的CLOVER是人家成功過的，原因可能就出在你的kext沒有更新，請去將必要的`.kext`上網下載一下更新。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/H23S2d3.png"><br> 

選擇繁體中文後，選擇磁碟工具，要將你要安裝macOS的磁碟格式化為`APFS`格式，清除完之後，才能裝Mojave<br>
找不到磁碟工具的話，左上角有個工具列隨便找找看。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/hqNg9Nv.png"><br> 

記得要檢查一下，選對的磁碟(大小要跟你割出來的磁碟差不多)，不然格式化錯了就慘了。清除前可以取個名字(macOS之類的)，等等選擇時方便選。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/XnMIpvW.png"><br> 

清除完成後，按左上角的叉叉，選擇安裝macOS，一直點確認或同意之後，選擇你剛剛格式化好的硬碟然後按安裝，就給他慢慢跑吧。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/gYFTPIu.png"><br> 

如果安裝成功了，他會自動幫你重開機，這時候你會不小心又跑到windows。那你就順便檢查一下CLOVER裡的另一個config，記得後再重開機。<br>
重開機再進入USB開機檔之後，記得從option裡選擇你要的config後，再選擇`boot macOS from "你取的磁碟名字"` 之類的。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/nlbPe8K.png"><br> 

接著也是一連串的亂碼<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/tY31YQm.png"><br> 

如果成功就會看到apple圖示了，失敗的話請也去查一下為什麼。但這步如果已經有人成功過了，通常就會成功。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/sMbvZyg.png"><br> 

經過一開始的mac設定，就會進到mac系統了<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/aaMvs3y.png"><br> 

這時候還沒結束，因為你不想每次開機時都用隨身碟，所以要把開機檔灌到你的硬碟去。<br><br>
首先先進入windows或是你的主系統內，打開磁碟管理，在macOS的磁碟前面壓縮一個約500MB的空間，不要指派格式<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/pwztBLG.png"><br> 

進入cmd，輸入：
```
write diskpart
list disk
```
會看到你的disk分布狀態，在D disk裡會有500MB的空間是可用的。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/1a5RYTv.png"><br> 

接著`select disk {num}`，如果你的macOS的disk是0就打`select disk 0`<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/GLcqsm7.png"><br> 

接著輸入`create partition efi`，會把那500MB的空間變成efi開機區。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/Lwlb9Yz.png"><br> 
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/2Aift0T.png"><br> 

接著輸入`list partition`，會把D disk的所有分割都列出來，找到你剛剛割出來的系統磁碟區的編號，在我這邊是7。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/c9z7MpP.png"><br> 

輸入：
```
select partition 7
format quick fs=fat32
```
再來，用隨身碟進入你的macOS。在macOS上下載[Clover Configurator](https://mackie100projects.altervista.org/download-clover-configurator/)並安裝，安裝後打開。<br>
左側選擇`Mount EFI`，在下面或上面找到你的500MB的efi專區後，點選`Mount Partition`後，按`Open Partition`打開資料夾。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/RVvJC4v.png"><br> 

接著把隨身碟裡的EFI資料夾複製後，在開機EFI區的EFI資料夾上覆蓋，覆蓋方式選擇merge。覆蓋完後你的500MB開機區應該會長這樣。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/53dT9n4.png"><br> 

接著就會在你的boot loader中自己多一個clover的選項啦！以後就不用隨身碟開機了。<br><br>
安裝好的Mojave會把你的ASUS筆電或任何桌機變成...27寸Retina螢幕的iMac！！<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/BX3jmr3.png"><br> 

用起來系統也非常順，跟真的mac一樣，只是開機時麻煩的點。<br>
還有沒辦法使用iCloud、Facetime等綁定apple機子的功能。<br>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/3qAJNJn.gif"><br> 


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
	<h4 style="text-align: center; padding: 20px;">一些macOS的截圖。</h4>
	<div class="gallery">
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/RPbdqhx.png">
		</div>
	</div>
</div>
<div class="container">
	<div class="gallery">
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/kbNwvhG.png">
		</div>
	</div>
</div>
<div class="container">
	<div class="gallery">
		<div class="gallery-item">
			<img class="gallery-image" src="https://i.imgur.com/cwScLFY.png">
		</div>
	</div>
</div>

最後感謝一下幫助過我的朋友跟一個俄羅斯人，基本上都是那俄羅斯人教我的。<br><br>

灌完mac覺得很爽，我身邊沒有人灌成功過的樣子。然後一台筆電裡有三個系統真他媽潮。<br><br>

就這樣。ㄏㄏ。<br>


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
