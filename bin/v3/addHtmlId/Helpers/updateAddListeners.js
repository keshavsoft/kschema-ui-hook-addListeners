import uiFix from "ui-fix-add-listeners-js";

const startFunc = async ({ toPath, endpoint, inShowLog = true }) => {
    return await uiFix({
        showLog: true,
        endPointsJsPath: `${localToPath}/addListeners.js`,
        inActionName: endpoint,
        inFolderName: endpoint
    });
};

export default startFunc;