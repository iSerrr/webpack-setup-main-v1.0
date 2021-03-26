export default class Third {
    constructor() {
        this.name = 'Third'
    }

    bootstrap() {
        window.addEventListener('load', this.onLoad.bind(this));
    }

    onLoad() {
        console.log(this.name)
    }
}