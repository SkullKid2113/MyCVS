export class CSVParser {

    #filePath = "null";
        constructor(){
            this.#filePath = "banana.txt";

        }
    filePath() {
        return this.#filePath
    }

}
