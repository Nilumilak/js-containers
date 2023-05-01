export default class ErrorRepository {
    #errors = new Map([
        [1, 'Error 1'],
        [2, 'Error 2'],
        [3, 'Error 3'],
    ]);

    translate(code) {
        return this.#errors.has(code) ? this.#errors.get(code) : 'Unknown Error';
    }
}
