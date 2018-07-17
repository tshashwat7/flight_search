module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        serve: {
            options: {
                port: 8080,
            }
        },
    });

    grunt.registerTask('install', ['npm-install', 'bower-install']);

    grunt.registerTask('default', ['serve']);

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-npm-install');
    grunt.loadNpmTasks('grunt-bower-install');
};