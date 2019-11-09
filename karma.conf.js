module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'karma-typescript'],
        files: [
            'src/**/*.ts',
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots", "karma-typescript"],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless', 'Firefox'],
        singleRun: true,
    })
}
