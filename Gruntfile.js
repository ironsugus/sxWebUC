/*
 * sxWebUC Gruntfile
 */

module.exports = function(grunt) {

	grunt.initConfig({

		
		clean : {
			css : [ 'WebContent/css/*', '!WebContent/css/sx*' ],
			js : [ 'WebContent/js/**/bootstrap*', 'WebContent/js/**/npm.js', 'WebContent/js/umd/**' ]
		},

		subgrunt : {
			target0 : {
				projects : {
					// For each of these projects, the specified grunt task will
					// be
					// executed:
					'node_modules/module1' : 'default',
					'node_modules/module2' : 'bower:install'
				}
			},
			test : {
				'bootstrap-4.0.0-alpha' : 'test'
			},
			dist : {
				'bootstrap-4.0.0-alpha' : 'dist'
			}
		},

		copy : {
			files : {
				cwd : 'bootstrap-4.0.0-alpha/dist',
				src : [ '**/*' ],
				dest : 'WebContent',
				expand : true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-subgrunt');

	grunt.registerTask('bs', [ 'subgrunt:dist' ]);
	grunt.registerTask('default', [ 'bs', 'clean', 'copy:files' ]);

}
