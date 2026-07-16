import fs from 'fs';

const startFunc = ({ filePath, inFolderName }) => {
    try {
        let content = readFile(filePath);

        content = content.replaceAll("<htmlId>", inFolderName);

        writeFile(filePath, content);
    } catch (e) {
        handleError(e);
    };
};

// read
function readFile(filePath) {
    return fs.readFileSync(filePath, "utf-8");
};

// write
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content);
};

// error handler
function handleError(e) {
    console.error("ROUTE USE ERROR:", e.message);
};

export default startFunc;