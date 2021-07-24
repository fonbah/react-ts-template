const webpack = require('webpack');
const webPackdevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'app.js',
    },
});

const options = {
    contentBase: './dist/public',
    host: 'localhost',
    open: true,
    clientLogLevel: 'error',
    historyApiFallback: true,
};

webPackdevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webPackdevServer(compiler, options);

server.listen(8080, 'localhost', () => {
    console.log('listening on port 8080');
});