module.exports = function(grunt) {
  // configure tasks
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'cluster.js'
      }
    },
    sass: {
          dist: {
            files: {
              'client/stylesheets/application.css' : 'sass/application.scss'
            }
          }
        }

  });


  // load tasks
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-sass');


  // set default
  // order matters here
  grunt.registerTask('default', ['nodemon', 'sass']);

}