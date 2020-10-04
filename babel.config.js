module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          components: './src/components',
          containers: './src/containers',
          config: './src/config',
          helpers: './src/helpers',
          store: './src/store',
          assets: './src/assets',
          types: './src/types'
        },
      },
    ],
  ],
};
