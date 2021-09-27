import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngleLeft);
library.add(faSearch);

export default {
    install(app) {
        app.component("font-awesome-icon", FontAwesomeIcon);
    }
}