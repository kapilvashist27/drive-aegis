const { driveService } = require("./auth.js");

async function deleteFile() {
    const response = await driveService.files.delete({
        fileId: "1xO1agmYshFQuCW02BgH1RGhcQLaeCMs7"
    });

    console.log(response.status);
}


deleteFile();