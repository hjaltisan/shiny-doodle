const identity = `Developer ID Application: ${process.env.MACOS_CERT_COMPANY} (${process.env.MACOS_CERT_ID})`

module.exports = {
  packagerConfig: {
    asar: { unpack: '*.{node,dll,lib,dylib,so}' },
    osxSign: {
      identity,
    },
  },
};
