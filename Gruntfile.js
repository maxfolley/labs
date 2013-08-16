module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'Gruntfile.js',
        'source/scripts/**/**/*.js'
      ],
      options: {
        globals: {
          console: true,
          oak: true,
          window: true
        },
        ignores: [
          'source/scripts/lib/*.js'
        ]
      }
    },
    watch: {
      hint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('app/tasks');

  grunt.registerTask('default', ['watch']);

};
