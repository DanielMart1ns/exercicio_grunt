module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch:{
            less:{
                files: ['src/styles/**/*.less'],
                tasks: ['less:dev']
            },
            html:{
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },

        less:{
            dev:{
                files:{
                    'dev/styles/main.css' : 'src/styles/main.less'
                }
            }, 

            build:{
                options:{
                    compress: true
                },
                files:{
                    'dist/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },

        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        },

        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        },

        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'endereco_css',
                            replacement: 'styles/main.css'
                        },
                        {
                            match:'endereco_js',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dev'
                }]
            },

            build:{
                options:{
                    patterns:[
                        {
                            match: 'endereco_css',
                            replacement: 'styles/main.min.css'
                        },
                        {
                            match: 'endereco_js',
                            replacement: 'scripts/main.min.js'
                        }
                    ]
                },
                files:[{
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist'
                }]
            }
        },

        clean: ['prebuild']
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')

    grunt.registerTask('default', ['watch'])

    grunt.registerTask('build', ['less:build', 'uglify', 'htmlmin', 'replace:build', 'clean'])
}