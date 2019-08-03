---
title: 自介
icon: fa-question
order: 2
---

<script type="text/javascript" src="assets/js/gem-download-count.js" defer></script>

<div class="row">
  <div class="5u 12u$(mobile)">
    <div class="item" style="box-shadow: none;">
        <a  class="image fit">
        <img style="border-radius: 500px; max-height: 400px; max-width: 400px; margin: auto;" src="assets/images/avatar.jpg" alt="Logo of EashSheet" />
        </a>
    </div>
  </div>
  <div class="7u 12u$(mobile)">
    <div class="item" style="box-shadow: none;">
        <p style="text-align: left; padding: 30px; margin: 0px;">
        ===當兵中===<br>
        我叫陳兆廷，是ㄍ普通大二生，讀清華大學的電機系。<br>
最近進入系上的VSLab，未來應該做ML/DL相關。<br>
住在北投/新竹，喜歡看電影/影集/音樂/玩電腦。<br>
最近發現寫網頁還不錯玩。<br>
喜歡貓咪/小動物。<br>
討厭吃很多東西，沙沙的/牛奶的/菜梗的。<br>
人生到現在最大的成就應該是考ㄌ75級。<br>
        </p>
    </div>
  </div>
</div>

<!-- Html Elements for Search -->
<div id="search-container">
    <span class="icon fa-search">搜尋文章</span>
    <input type="text" id="search-input" placeholder="" style="background: rgba(255,255,255,0.75); border-radius: 0.35em; box-shadow: inset 0 0.1em 0.1em 0 rgba(0,0,0,0.05); border: solid 1px rgba(0,0,0,0.15)">
    <ul id="results-container" style="padding-top: 20px; margin-bottom: 0px;"></ul>
</div>
        
<!-- Script pointing to search-script.js -->
<script src="assets\js\search.js" type="text/javascript"></script>
        
<!-- Configuration -->
<script>
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        searchResultTemplate: '<li><div class="row" style="margin-top: 10px;"><div class="7u 12u$(mobile)" style="text-align: left;"><h4 style="display: inline;"><a href="{url}">[{category}] {title}</a></h4><p style="margin: 0px;display: inline;padding-left: 10px;">{date}</p></div><div class="5u 12u$(mobile)" style="text-align: left;"><p style="margin: 0px; padding-top: 5px;">{subtitle}</p></div></div></li>',
        json: 'search.json'
    })
</script>