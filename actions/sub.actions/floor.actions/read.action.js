const dataStore = require('../../../database/store/store');

let readAction = function() {
    return dataStore;
}
module.exports = readAction;
