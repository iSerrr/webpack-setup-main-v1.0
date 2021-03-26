export default class Second {
    constructor() {
        this.name = 'Second'
    }
    
    bootstrap() {
        window.addEventListener('load', this.onLoad.bind(this));
    }

    onLoad() {
        console.log(this.name)
    }
}