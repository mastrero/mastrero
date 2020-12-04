require('dotenv').config();
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
        '@components': `${__dirname}/src/components`,
        '@contents': `${__dirname}/src/contents`,
        '@images': `${__dirname}/src/images`,
        '@layouts': `${__dirname}/src/layouts`,
        '@utils': `${__dirname}/src/utils`,
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
