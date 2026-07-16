import { getKSTableConfig } from "./getKSTableConfig.js";
import getData from "./getData.js";

const startFunc = async () => {
    const config = await getKSTableConfig();

    config.defaults.data = await getData();

    if (config.callbacks) {
        if (config.callbacks.table.body.show) {
            config.callbacks.table.body.show = fromLibrary => {
            };
        };

        if (config.callbacks.table.body.edit) {
            config.callbacks.table.body.edit = fromLibrary => {
            };
        };
    }

    ksTable1 = new window.ks.classes.tableShowOnly(config);
    ksTable1.initShowTable();
};

export default startFunc;