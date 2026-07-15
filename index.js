import getLatestVersion from "./bin/core/getLatestVersion.js";
import v3AddHtmlId from "./bin/v3/addHtmlId/index.js";

const load = (options) => {
    const v = getLatestVersion();

    if (v === "v3") {
        return v3AddHtmlId(options);
    }

    throw new Error(`Unsupported version: ${v}`);
};

export default load;