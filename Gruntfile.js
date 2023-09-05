module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            paths: ["less"]
          },
          files: {
            "css/style.css": "less/style.less"
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'js/app.min.js': ['js/*.js']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };
  