const imagKit = require('imagekit')
const uuid = require('uuid')
var imagekitKeys = new imagKit({
    publicKey : "public_DG2KyGaClrB+8aCCc09JgZLPbBU=",
    privateKey : "private_POFZvnVGEjYdVGODNG4XacijFc8=",
    urlEndpoint : "https://ik.imagekit.io/clfxw5w1o"
});

function uploadImage(file){
    return imagekitKeys.upload ({
        file:file.buffer,
        fileName:uuid.v4()
    })
}
module.exports = uploadImage