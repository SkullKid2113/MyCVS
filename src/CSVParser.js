export class CSVParser {

    #filePath = null;
        constructor(filePath){
            filePath = "banana.txt";
            this.#filePath = filePath;

        }
    filePath() {
        return this.#filePath
    }

}
