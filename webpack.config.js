var webpack = require('webpack');

var API_URL = {
    production: JSON.stringify('//www.pse-screener.com'),
    development: JSON.stringify('//192.168.0.110')
}

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    //watch: true,
    module: {
        /*preLoaders: [{
            test: /\.jsx?$/,
            loaders: ['eslint'],
            //include: PATHS.app
        }],*/
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            'API_URL': API_URL[environment]
        })
    ]
}