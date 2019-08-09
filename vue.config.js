module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/sif-box/'
      : '/',
    outputDir: 'docs',
  };