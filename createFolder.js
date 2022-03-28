const { driveService } = require('./auth.js');



const requestBody = {
    name: "Aegis Test",
    mimeType: 'application/vnd.google-apps.folder',
    parents: ['1PgweRT_g3njNGH8-_NRPFpsDX4A73N4D'] // ID for the MAIN folder
};

async function createFolder() {

    const newFolder = await driveService.files.create({
        requestBody
    });

    console.log(newFolder);

};


createFolder();
