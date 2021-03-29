const appMethods = require("./appController");

module.exports = function(router) {
    router.get('/users', appMethods.users);
    router.get('/bars', appMethods.bars);
    router.get('/highwayStats', appMethods.highwayStats);
    router.get('/caveStats', appMethods.caveStats);
}
