module.exports = function(grunt) {

  grunt.initConfig({

    // COOL TASKS ==============================================================
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['public/css/**/*.css']    
      },
      js: {
        files: ['public/js/*.js']
      },
      html: {
        files: ['views/**/*.ejs', 'views/*.ejs']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['concurrent']);

};