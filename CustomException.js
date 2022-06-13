export default class CustomException {
  #message
  #name = 'CustomException'

  constructor(message) {
    this.catchException(message);
  }

  #setErrorMessage(message) {
    this.#message = message;
  }

  getMessage() {
    return this.#message;
  }

  catchException(message) {
    this.#setErrorMessage(message);
    console.error(this.getMessage());
  }
}