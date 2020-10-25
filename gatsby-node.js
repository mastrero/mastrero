const path = require(`path`);

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  //* DISABLE SOURCEMAP FILES ON PRODUCTION
  if (stage === `build-javascript` || getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
  //* ABSOLUTE PATHS
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~sub': path.resolve(__dirname, 'src/components/sub'),
        '~layout': path.resolve(__dirname, 'src/layouts'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
  //* HOT-LOADER FOR REACT-16.6+
  if (stage.startsWith('develop') && getConfig().resolve) {
    getConfig().resolve.alias = {
      ...getConfig().resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
