import path from "path";
import index from "../../../index.js";

const startFunc = () => {
    index({
        showLog: true,
        toPath: path.join(process.cwd(), "test", "v2", "addHtmlId"),
        inActionName: "Html1",
        folderName: "Fold1"
    });
};

startFunc();