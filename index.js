const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const src = "C:\\tahir\\codes\\Qu\\BC660K-GL_QuecOpen_NB5_SDK_V1.2\\BC660K-GL_QuecOpen_NB5_SDK_V1.2\\PLAT\\gccout\\APPNB5MDM32A01";
const dest = "C:\\tahir\\codes\\mann-medicenter\\pillcap-binaries";

// Ensure destination directory exists
if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
}

// Move files from src to dest
fs.readdir(src, (err, files) => {
    if (err) {
        console.error("Error reading source directory:", err);
        return;
    }

    files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        
        fs.rename(srcPath, destPath, (err) => {
            if (err) {
                console.error(`Error moving file ${file}:`, err);
            } else {
                console.log(`Moved: ${file}`);
            }
        });
    });
});
