module.exports = {
    plugins: [
        ['@electron-forge/plugin-webpack', {
            mainConfig: './webpack.main.config.js',
            renderer: {
                config: './webpack.renderer.config.js',
                entryPoints: [{
                    html: './src/views/index.html',
                    js: './src/main.tsx',
                    name: 'main_window'
                }]
            }
        }]
    ]

};
