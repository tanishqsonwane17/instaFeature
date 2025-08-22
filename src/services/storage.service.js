const ImageKit = require('imagekit');
const { v4: uuidv4 } = require('uuid');

const imagekit = new ImageKit({
    publicKey: "public_DG2KyGaClrB+8aCCc09JgZLPbBU=",
    privateKey: "private_POFZvnVGEjYdVGODNG4XacijFc8=",
    urlEndpoint: "https://ik.imagekit.io/clfxw5w1o"
});

async function uploadImage(file) {
    const base64 = file.buffer.toString('base64');
    return imagekit.upload({
        file: base64,
        fileName: uuidv4(),
    });
}
module.exports = uploadImage;
