const { driveService } = require("./auth.js");


const requestBody = {
    name: "Renamed"
}

async function renameFile() {
    const response = await driveService.files.update({
        fileId: "1xO1agmYshFQuCW02BgH1RGhcQLaeCMs7",
        requestBody
    });

    console.log(response.data);
}


renameFile();