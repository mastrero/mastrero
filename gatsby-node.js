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
        '@layouts': `${__dirname}/src/components/layouts`,
        '@tabs': `${__dirname}/src/components/tabs`,
        '@images': `${__dirname}/src/images`,
        '@theme': `${__dirname}/src/theme`,
        '@types': `${__dirname}/src/types`,
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
