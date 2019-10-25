const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override (
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
       style: true,
    }),
    addLessLoader({
       javascriptEnabled: true,
       modifyVars: { '@primary-color': '#1DA57A' },
    }),
    (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.output.publicPath = './';
        }
        return config;
    }
)