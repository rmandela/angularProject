/*jslint node: true */
"use strict";
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			temp: {
		        src: [ 'tmp' ]
		      },
		    dist: {
		        src: [ 'dist' ]
		      }
	     
	    },

		connect: {
		  server: {
		    options: {
		      hostname: 'localhost',
		      port: 8080,
		      open: 'http://localhost:<%= connect.server.options.port %>/index.html'
		    }
		  }
		},
		watch: {
	      dev: {
	        files: [ 'Gruntfile.js', 'app/*.js', '*.html', 'partials/*.html'],
	        tasks: [ 'clean:temp' ],
	        options: {
	          atBegin: true
	        }
	      }
	    },
	    karma: {
	      options: {
	        configFile: 'karma.conf.js'
	      },
	      unit: {
	        singleRun: true
	      },
	      junit: {
	        singleRun: true,
	        reporters: ['junit', 'coverage']
	      },
	      continuous: {
	        singleRun: false,
	        autoWatch: true
	      }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('serve', ['clean:dist', 'connect:server', 'watch:dev']);
	grunt.registerTask('test', [ 'clean:dist', 'karma:continuous' ]);
}