const {google} = require('googleapis');
const configAuth = require('../oath.json');
const ls= require('local-storage');
const googleConfig = {
    clientId: configAuth.web.client_id,
    clientSecret: configAuth.web.client_secret,
    redirect: configAuth.web.redirect_uris
};

const oauth2Client = new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
);

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/contacts.readonly'
    ];

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function urlGoogle() {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}

exports.checkauth = (req,res) => {
    res.redirect(urlGoogle());
};
// app.get('/', (req,res) => {
//     res.redirect(urlGoogle());
// });

exports.redirectgoogle = async (Request,Response) => {
    const {tokens} = await oauth2Client.getToken(Request.query.code);
    oauth2Client.setCredentials(tokens);
    ls.set('rtoken',tokens);
    console.log(tokens);
    Response.redirect('/google/contact'); 

};
// app.get('/redirect', async (Request,Response) => {
//     const {tokens} = await oauth2Client.getToken(Request.query.code);
//     oauth2Client.setCredentials(tokens);
//     ls.set('rtoken',tokens);

//     Response.redirect('/contact'); 

// });

exports.contact = function(red,response){
    oauth2Client.setCredentials(ls.get('rtoken'));
    const peopleService = google.people({
      version: 'v1', 
      auth: oauth2Client
    });

    peopleService.people.connections.list({
        resourceName: 'people/me',
        personFields: 'emailAddresses,names'
        },(err, res) => {
           if(err)
           {
                console.log(err);
           }
           else
           {
                response.send(JSON.stringify(res.data.connections));
          }
    });

  };
// app.get('/contact',function(red,response){
//     oauth2Client.setCredentials(ls.get('rtoken'));
//     const peopleService = google.people({
//       version: 'v1', 
//       auth: oauth2Client
//     });

//     peopleService.people.connections.list({
//         resourceName: 'people/me',
//         personFields: 'emailAddresses,names'
//         },(err, res) => {
//            if(err)
//            {
//                 console.log(err);
//            }
//            else
//            {
//                 response.send(JSON.stringify(res.data.connections));
//           }
//     });

//   });
