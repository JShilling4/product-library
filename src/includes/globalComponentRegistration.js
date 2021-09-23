import { camelCase, upperFirst } from "lodash";

export default {
    install(app) {
        const baseComponents = require.context(
            "../components/global/",
            false,
            /[A-Za-z0-9-_,\s]+\.vue$/i
        );

        baseComponents.keys().forEach((fileName) => {
            const componentConfig = baseComponents(fileName);
            const componentName = upperFirst(
                camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
            );

            // export default
            app.component(componentName, componentConfig.default || componentConfig);
        });
    },
};
