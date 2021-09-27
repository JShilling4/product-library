import data from "./mocks/data.json";

const usingMocks = true;
const networkDelay = 600;

// ENDPOINTS
export default {
    fetchPageData() {
        if (usingMocks) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ data });
                }, networkDelay);
            });
        }
    }
};
