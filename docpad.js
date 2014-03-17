// http://docpad.org/docs/config

require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "Lumen Global Value Compass",
      description: "a system for monthly commentary on global themes, country summaries, and asset allocation.",
      styles: ["/styles/index.css"],
    },
  },
  detectEncoding: true,
  plugins: {
    handlebars: {
      helpers: {
        partial: function (content, options) {
          return this.partial(content, options);
        },
        block: function (blockName) {
          return this.getBlock(blockName).toHTML();
        },
      },
    },
    browserifybundles: {
      bundles: [{
        arguments: ['-t', 'uglifyify'],
        entry: 'scripts/index.js',
        out: 'scripts/bundle.js',
      }, {
        arguments: ['-t', 'uglifyify'],
        entry: 'scripts/compass.js',
        out: 'scripts/compassbundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/index.js',
            out: 'scripts/bundle.js',
          }, {
            arguments: ['-d'],
            entry: 'scripts/compass.js',
            out: 'scripts/compassbundle.js',
          }],
        },
      },
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
      semantic: {
        command: ['rsync', '-r', 'node_modules/semantic/src/fonts/', 'out/fonts'],
      },
    },
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'gh-pages',
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
