export class CSVParser {

    #filePath = null;
        constructor(file){
            this.#filePath = file;

        }
    filePath() {
        return this.#filePath
    }

}
