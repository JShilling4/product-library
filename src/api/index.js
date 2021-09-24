import data from "./mocks/data.json";

const isMock = true;
const mockDelay = 400;

// ENDPOINTS
export default {
    fetchPageData() {
        if (isMock) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ data });
                }, mockDelay);
            });
        }
    }
};
