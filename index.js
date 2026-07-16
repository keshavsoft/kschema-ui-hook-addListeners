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

const verticals = {};

verticals.saveOnly = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/verticals/saveOnly/index.js`);

    return mod.default(options);
};

verticals.stackedSaveOnly = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/verticals/stackedSaveOnly/index.js`);

    return mod.default(options);
};

export { showAll, verticals };
export default load;