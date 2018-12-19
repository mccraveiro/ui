export default {
  src: 'src/documentation',
  theme: 'src/documentation/theme/index',
  ordering: 'ascending',
  modifyBundlerConfig: (config) => {
    config.resolve.extensions.push('.css')
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    })

    return config
  }
}
