const feedList = document.querySelector('.feeds');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');


const setupUI = (user) => {
  if (user) {
    // account info
    if(user.admin){
      adminItems.forEach(item => item.style.display = 'block');
    }
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <h1 id="title">${doc.data().user}</h1>
        <p>${user.email}</p>
        <p style="color: pink;">${user.admin ? '管理員' : '一般用戶'}</p>
      `;
      accountDetails.innerHTML = html;
    })
    //toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // account info
    accountDetails.innerHTML = `<h1 id="title" href="/">廢文集散地</h1><p>@jack34672</p>`;
    adminItems.forEach(item => item.style.display = 'none');
    // toggle UI
    loggedOutLinks.forEach(item => item.style.display = 'block');
    loggedInLinks.forEach(item => item.style.display = 'none');
  }
}

// setup guides
const setupFeeds = (data) => {

  if(data.length){
    let html = '';
    data.forEach(doc => {
      const feed = doc.data();
      //console.log(feed)
      db.collection('users').doc(feed.author).get().then(doc => {
        //console.log(doc.data().user)
        
        const li = `
        <section id="${feed.title}">
          <div class="row">
              <div class="3u" style="padding: 0px; text-align: right;">
                <img src="https://api.adorable.io/avatars/150/${doc.data().user}@adorable.io.png" style="border-radius: 10px; width: 100%; height: auto; max-width: 100px;"/>
              </div>
              <div class="9u" style="padding: 0px; padding-left: 10px;">
                <h3>${doc.data().user}</h3>
                <h4 class="date" style="padding-left: 10px;">${feed.postedAt.toDate().toString().substring(4,21)}</h4>
                <p style="margin-bottom: 0px; font-size: 1.35em;">${feed.content}</p>
              </div>
          </div>
        </section>
        `;
        html += li; 
        feedList.innerHTML = html;
      })
    });
  } else {
    feedList.innerHTML = '<h3 style = "text-align: center;">登入才能看到塗鴉牆</h3>';
  }
}