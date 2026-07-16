import uiFix from "ui-fix-add-listeners-js";

const startFunc = ({ toPath, endpoint, inShowLog = true }) => {
    const localToPath = toPath;

    return uiFix({
        showLog: true,
        endPointsJsPath: `${localToPath}/addListeners.js`,
        inActionName: endpoint,
        inFolderName: endpoint
    });
};

export default startFunc;