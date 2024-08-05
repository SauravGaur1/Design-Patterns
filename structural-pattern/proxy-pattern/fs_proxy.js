class FS_Proxy {
    constructor(fs) {
        this.fs = fs;
    }

    readFile(path, fileFormat, cb) {
        if(!path.match(/.md$|.MD$/)){
            return cb(new Error("Can read only Mark-down files"));
        }

        this.fs.readFile(path, fileFormat, (err, data) => {
            if(err) {
                console.log(err);
                return cb(err);
            }

            return cb(null, data)
        })
    }

}

module.exports = FS_Proxy;