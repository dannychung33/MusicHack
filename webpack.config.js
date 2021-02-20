const path = require('path');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'node_modules/tone'), 'node_modules']
    },
};