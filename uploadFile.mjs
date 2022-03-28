import { driveService, token } from "./auth.js"
import fs from "fs";

const files = fs.readdir("./images", async (err, files) => {
    folder_files = await files;
    fileUpload(files);
});

function fileUpload(files) {

    files.map(async (file, index) => {
        const requestBody = {
            name: file,
            mimeType: 'image/jpg',
            parents: ['1NQBA8OfXdS3ulKIYN0WCN-VWYdfUwXm3']
        };

        const media = {
            mimeType: "image/jpg",
            body: fs.createReadStream(`./images/${file}`)
        }

        const responseData = await driveService.files.create({
            // uploadType: "resumable",
            requestBody,
            media
        });

        if (responseData.status === 200) {
            // console.log('Created ID: ', responseData.data.id)
            console.log(responseData.config.onUploadProgress)
        }

    })

};


