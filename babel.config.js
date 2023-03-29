module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json', '.svg'],
          alias: {
            '@components': './src/components',
            '@themes': './src/global/styles',
            '@contexts': './src/contexts',
            '@configs': './src/configs',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
