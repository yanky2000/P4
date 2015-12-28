module.exports = function(grunt) {

  grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'dist/js/perfmatters.min.js': ['dev/js/perfmatters.js'],
        'dist/views/js/main.min.js': ['dev/views/js/main.js']
      }
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'dev/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      },
      {
        expand: true,
        cwd: 'dev/views/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/views/css/',
        ext: '.min.css'
      }
      ]
    }
  },

  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'dev/index.html',
        'dist/views/pizza.html': 'dev/views/pizza.html'     // 'destination': 'source'
      }
    },
    dev: {                                       // Another target
      files: {
        'dist/index.html': 'src/index.html',
      }
    }
  }


});

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
