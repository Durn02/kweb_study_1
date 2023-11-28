const fs = require('fs');
const path = require('path')

const findFile = (folder) => {
try {
    fs.readdirSync(folder, {withFileTypes: true}).forEach((file) => {
        const inner_path = `${folder}\\${file.name}`;
        if (file.isDirectory()) {
            findFile(inner_path);
        }
        else if (path.extname(file.name) == '.js') {
            console.log(inner_path);
        }
    })
}
catch (error){
    console.log(error);
}
}

findFile('test')
