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
        <section id="${feed.title}" class="shade-three">
          <div class="" style="max-width: 400px; margin: auto;">
            <div class="row">
              <div class="4u" style="padding: 0px;">
                <img src="https://www.gravatar.com/avatar/${doc.data().user}?s=100&d=retro" style="width: 80px;  border-radius: 10px; height: auto; margin-left: 30px;"/>
              </div>
              <div class="8u" style="padding: 0px;">
                <h4 style="padding-top: 10px; text-align:center; display: inline;">${doc.data().user}</h4>
                <h5 class="date" style="text-align:center; display: inline; padding-top: 10px; padding-left: 5px;">${moment(feed.postedAt.toDate()).fromNow()}</h5>
                <h4 style="padding-top: 10px; display: inline;">：</h4>
                <p style=" text-align: center; margin-bottom: 0px; font-size: 1.35em;">${feed.content}</p>
              </div>
            </div>
          </div>
        </section>
        `;
        html += li; 
        feedList.innerHTML = html;
      })
    });
  } else {
    feedList.innerHTML = '<h5 class = "center-align">Login to view guides</h5>';
  }
}