const { driveService } = require('./auth.js');


async function getFileFolder() {
    const data = await driveService.files.list();
    console.log(data.data);
}

getFileFolder();

module.exports = getFileFolder;