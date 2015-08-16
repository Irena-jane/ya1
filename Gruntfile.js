module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config:{
      src:'src',
      dist:'public'
    },


    // ===========
    // STYLES TASK
    // ===========
    less : {
      styles: {
        options: {

          },
          files: {
            "<%= config.src %>/css/style.css": "<%= config.src %>/less/style.less"
          }
      }
    },



    autoprefixer: {
      styles: {
        options: {
          browsers: ['last 2 versions', 'ie 9']
        },
        src: '<%= config.src %>/css/style.css'
      },
    },

    cmq: {
      styles: {
        files: {
          '<%= config.src %>/css/style.css': ['<%= config.src %>/css/style.css']
        }
      }
    },


      cssmin: {
        options: {
          // shorthandCompacting: false,
          // roundingPrecision: -1
        },
        styles: {
          files: {
            '<%= config.src %>/css/style.min.css': [
            '<%= config.src %>/css/style.css'

            ]
          }
        }
      },



       // =====
    // WATCH
    // =====

    watch: {

      // scripts: {
      //   files: ['<%= config.src %>/js/**/*.js'],
      //   tasks: ['scripts'],
      //   options: {
      //     spawn: false,
      //     livereload: true
      //   },
      // },


      less: {
        files: ['<%= config.src %>/less/**/*.less'],
        tasks: ['styles'],
        options: {
          spawn: false,
          livereload: true
        }
      },


      livereload: {
        options: { livereload: true },
        files: ['<%= config.src %>/**/*.html','<%= config.src %>/css/**/*.css','<%= config.src %>/js/**/*.js']
      }
    },



  



  });



  require('load-grunt-tasks')(grunt);

  
  grunt.registerTask('c', ['copy']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('styles', [
    'less',
    'autoprefixer',
    'cmq',
    'cssmin'
    ]);

};
