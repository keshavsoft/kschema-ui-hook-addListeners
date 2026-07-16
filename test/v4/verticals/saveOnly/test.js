import path from "path";
import { verticals } from "../../../../index.js";

const startFunc = () => {
    verticals.saveOnly({
        showLog: true,
        toPath: path.join(process.cwd(), "test", "v4", "verticals", "saveOnly"),
        inActionName: "Html1",
        folderName: "Fold1"
    });
};

startFunc();