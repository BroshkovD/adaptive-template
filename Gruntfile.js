module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html',
          'source/less/**/*.less',
          '*.js',
          'source/js/**/*.js'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: false,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },

    less: {
      style: {
        files: {
          'build/css/style.css': ['source/less/style.less']
        }
      }
    },

    concat: {
      dist: {
        src: ['node_modules/tap.js/dist/tap.min.js', 'node_modules/hammerjs/hammer.min.js', 'source/js/map.js', 'source/js/slider_review.js',
              'source/js/slider_price.js', 'source/js/menu.js'],
        dest: 'build/js/script.js',
      },
    },

    watch: {
      options: {
        livereload: true,
        spawn:false
      },
      style: {
        files: ['source/less/**/*.less'],
        tasks: ['less', 'postcss']
      },
      html: {
        files: ['*.html'],
      },
      js: {
        files: ['source/js/*.js'],
        tasks: ['concat'],
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 version'] })
        ]
      },
      dist: { src: 'build/css/style.css' }
    },

    uglify: {
      my_target: {
        files: {
          'build/js/script.min.js': ['build/js/script.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    copy: {
      main: {
          expand: true,
          cwd: 'source/img/',
          src: ['**'],
          dest: 'build/img/'
      },
    }

  });

  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('lint', ['lintspaces']);
  grunt.registerTask('build:development', [ 'less', 'postcss', 'concat', 'copy' ]);
  grunt.registerTask('build', [ 'build:development' ]);
  grunt.registerTask('default', [ 'build:development', 'watch' ]);
  grunt.registerTask('build:production', [ 'less', 'postcss', 'cssmin', 'uglify', 'concat', 'copy' ]);

};
