import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const load = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/addHtmlId/index.js`);

    return mod.default(options);
};

export default load;