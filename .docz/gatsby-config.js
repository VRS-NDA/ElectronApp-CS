const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Vrs Into The Deep',
    description: 'Downloadable Virtual Robot Simulator Platform',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Vrs Into The Deep',
        description: 'Downloadable Virtual Robot Simulator Platform',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS',
          templates:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\node_modules\\docz-core\\dist\\templates',
          docz:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz',
          cache:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\.cache',
          app:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\app',
          appPackageJson:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\package.json',
          appTsConfig:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\tsconfig.json',
          gatsbyConfig:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\gatsby-browser.js',
          gatsbyNode:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\gatsby-node.js',
          gatsbySSR:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\gatsby-ssr.js',
          importsJs:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\app\\imports.js',
          rootJs:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\app\\index.html',
          db:
            'D:\\Projects\\Contract\\VRS-RobotSim\\newweb\\ElectronApp-CS\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
