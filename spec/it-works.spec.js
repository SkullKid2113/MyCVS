import {CSVParser} from "../src/CSVParser.js";

describe("csv-parse", function () {

    it("is a class that can be instantiated", function () {
        const o = new CSVParser()
        expect(o).toBeInstanceOf(CSVParser)
    })

    it("returns the file path as expected when calling filePath()", function() {
        const o = new CSVParser("banana.csv")
        expect(o.filePath()).toEqual("banana.csv")
    })

})
