module.exports = function(grunt) {
  // configure tasks
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'app.js'
      }
    }

  });


  // load tasks
  grunt.loadNpmTasks('grunt-nodemon');

  // set default
  // order matters here
  grunt.registerTask('default', ['nodemon']);

}