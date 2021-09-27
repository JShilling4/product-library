import camelizeKeys from "@/helpers/camelizeKeys";

describe("camelizeKeys", () => {
    const obj1 = {
        "KeyOne": "value1",
        "Keytwo": "value2",
    };
    const obj2 = {
        "keyOne": "value1",
        "keytwo": "value2",
    };

    it("changes obj keys to camel-case", () => {
        expect(camelizeKeys(obj1)).toMatchObject(obj2);
    });
});
