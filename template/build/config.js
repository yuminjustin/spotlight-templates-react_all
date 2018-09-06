/* 自定义配置 */
var path = require('path'),
    outputPathName = 'dist', // 输出目录名称
    outputPath = '../../' + outputPathName;

module.exports = {
    entry: { // 入口 (多)
        app: ['./src/main.js']
    },
    build: { // 生产环境
        env: '"production"',
        static: path.resolve(__dirname, '../static'), //资源目录
        newStatic: 'static',
        outputPath: outputPath, // 输出目录 
        outputPathName: outputPathName, // gulp & prod
        htmlOption: { // 对应 entry
            app: {
                title: 'react webpack',
                template: 'index.html', // 源模板文件
                filename: 'index.html' // 输出文件
            }
        },
        bundleAnalyzerReport: false // 打包报告
    },
    dev: { // 开发环境
        env: '"development"',
        contentBase: path.resolve(__dirname, "/"), // 需要被访问的根目录
        publicPath: "/",
        static: 'static',
        outputPath: path.resolve(__dirname, outputPath), // 临时
        port: '3001',
        html5Router: true, // html5 router 
        htmlOption: { // 对应 entry
            app: {
                title: 'react webpack',
                template: 'index.html', // 源模板文件
                filename: 'index.html' // 输出文件
            }
        },
        proxy: {

        },
        serverHandler: false
        //function(app){
        //   koa app 可以用来做mock
        //   app.get('/some/path', function(req, res) {
        //     res.json({ custom: 'response' });
        //   });
        //}
    }
}