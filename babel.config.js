module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@components': './src/components',
            '@themes': './src/global/themes',
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
