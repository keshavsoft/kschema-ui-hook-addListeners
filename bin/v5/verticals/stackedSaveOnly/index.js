import { locateSource } from "./Helpers/steps/locateSource.js";
import { locateDestination } from "./Helpers/steps/locateDestination.js";
import { createFolder } from "../../core/createFolder.js";

import updateAddListeners from "./Helpers/updateAddListeners.js";
import updateStartJs from "./Helpers/updateStartJs.js";

import { announce } from "./Helpers/announce.js";

// import resolveFolderName from "./Helpers/steps/resolveFolderName.js";

export default ({ folderName = "", tableName,
    argsAsIs, toPath, isAnnounce = true,
    checkBeforeCreate = true,
    inShowLog = true }) => {

    const localToPath = toPath;

    const source = locateSource();
    const destination = locateDestination({
        inResolvedFolderName: folderName,
        toPath: localToPath
    });

    const createFolderResponse = createFolder({
        source, destination,
        isAnnounce, checkBeforeCreate
    });

    if (createFolderResponse.KTF) {
        updateAddListeners({
            toPath: localToPath,
            endpoint: folderName,
            inShowLog
        });

        updateStartJs({
            filePath: `${localToPath}/${folderName}/start.js`,
            inFolderName: folderName
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: folderName });

    return folderName;
};