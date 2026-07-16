import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const load = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/addHtmlId/index.js`);

    return mod.default(options);
};

const showAll = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/addShowAll/index.js`);

    return mod.default(options);
};

export { showAll };
export default load;