const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    // check if admin
    if (context.auth.token.admin != true){
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

exports.removeAdminRole = functions.https.onCall((data, context) => {
    // check if admin
    if (context.auth.token.admin != true){
      return { error: 'only admins can remove other admins.'}
    }
    // get user and add admin custom claim
    return admin.auth().getUserByEmail(data.email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: false
      })
    }).then(() => {
      return {
        message: `Success! ${data.email} has been removed from admin.`
      }
    }).catch(err => {
      return err;
    });
});