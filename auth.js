const { google } = require("googleapis");


const keyFile = './credentials.json';
const scopes = ['https://www.googleapis.com/auth/drive'];
const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes
})


// async function token() {
//     const data = await auth.getAccessToken();
//     // console.log(data);
//     return data;
// }

// token();

const driveService = google.drive({ version: "v3", auth });

module.exports = { driveService};
