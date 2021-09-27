import formatPhone from "@/helpers/formatPhone";

describe("formatPhone", () => {
    it("cleans non-numerical and adds dashes", () => {
        expect(formatPhone("4328944567").match("432-894-4567"));
        expect(formatPhone("432g89+/44567a").match("432-894-4567"));
    });
});
