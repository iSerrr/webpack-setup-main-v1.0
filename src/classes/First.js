export default class First {
    constructor() {
        this.name = 'First'
    }

    bootstrap() {
        window.addEventListener('load', this.onLoad.bind(this));
    }

    onLoad() {
        console.log(this.name)
    }
}