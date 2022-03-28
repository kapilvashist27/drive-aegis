const { driveService } = require("./auth.js");

async function moveFiles() {
    const response = await driveService.files.update({
        fileId: "1xew476LMBZVo5WP2r4YYRRUzaSerNt3g",
        removeParents: ['1NQBA8OfXdS3ulKIYN0WCN-VWYdfUwXm3'],
        addParents: ['1PgweRT_g3njNGH8-_NRPFpsDX4A73N4D']
    });

    console.log(response);
}

moveFiles();