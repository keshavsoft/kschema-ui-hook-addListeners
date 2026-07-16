import path from "path";
import { showAll } from "../../../index.js";

const startFunc = () => {
    showAll({
        showLog: true,
        toPath: path.join(process.cwd(), "test", "v4", "addShowAll"),
        inActionName: "Html1",
        folderName: "Fold1"
    });
};

startFunc();