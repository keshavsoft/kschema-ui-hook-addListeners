import path from "path";
import index from "../../../index.js";

const startFunc = async () => {
    await index({
        showLog: true,
        toPath: process.cwd(),
        inActionName: "Html1",
        inFolderName: "Fold1"
    });
};

startFunc().then();