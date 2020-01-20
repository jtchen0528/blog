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
        <p style="color: pink;">${user.admin ? 'Admin' : ''}</p>
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
      // db.collection('users').doc(feed.author).get().then(doc => {
      //   const li = `
      //   <section id="${feed.title}" class="shade-three">
      //     <div class="container">
      //       <header>
      //         <h2><a href="#">${feed.title}</a></h2>
      //         <p>${doc.data().user}</p>
      //         <p>${feed.postedAt.toDate()}</p>
      //       </header>
      //       <p>${feed.content}
      //       </p>
      //       <a href=#"">read more</a>
      //     </div>
      //   </section>
      //   `;
      //   html += li; 
      // })
    });
    feedList.innerHTML = html;
  } else {
    feedList.innerHTML = '<h5 class = "center-align">Login to view guides</h5>';
  }
}