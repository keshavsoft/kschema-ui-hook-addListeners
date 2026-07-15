import index from "../../../index.js";

const startFunc = () => {
    index({
        showLog: true,
        toPath: process.cwd(),
        inActionName: "Html1",
        inFolderName: "Fold1"
    });
};

startFunc();