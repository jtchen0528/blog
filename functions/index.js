const functions = require('firebase-functions');

exports.addAdminRole = functions.https.onCall((data, context) => {
    // check if admin
    if (context.auth.token.admin != false){
      return { error: 'only admins can add other admins.'}
    }
    // get user and add admin custom claim
    return admin.auth().getUserByEmail(data.email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      })
    }).then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`
      }
    }).catch(err => {
      return err;
    });
  });