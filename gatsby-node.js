exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  if (stage === `build-javascript` || getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
  if (stage.startsWith('develop') && getConfig().resolve) {
    getConfig().resolve.alias = {
      ...getConfig().resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
