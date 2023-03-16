import {CSVParser} from "../src/CSVParser.js";

describe("csv-parse", function () {

    it("is a class that can be instantiated", function () {
        const o = new CSVParser()
        expect(o).toBeInstanceOf(CSVParser)
    })

    it("returns the file path as expected when calling filePath()", function() {
        const eins = new CSVParser("banana.txt")
        expect(eins.filePath()).toEqual("banana.txt")

        const zwei = new CSVParser("foofycat.txt")
        expect(zwei.filePath()).toEqual("foofycat.txt")
    })

})
