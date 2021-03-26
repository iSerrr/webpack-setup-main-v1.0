export default class Router{
    constructor(routers) {
        this.roouters = routers
    }

    run() {
        this.roouters.forEach(route => route.bootstrap())
    }
}