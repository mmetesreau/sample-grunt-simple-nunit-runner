module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-simple-nunit-runner');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-msbuild');
	
	grunt.initConfig({
		watch: {
			src: {
				files: ['src/*.*','src/**/*.*','!src/**/bin/**','!src/**/obj/**'],
				tasks:['msbuild','nunit']
			}
		},
		msbuild: {
			dev: {
				src: ['src/WhereIs/WhereIs.csproj'],
				options: {
					projectConfiguration: 'Debug',
					targets: ['Clean', 'Rebuild'],
					stdout: false,
					maxCpuCount: 4,
					buildParameters: {
						WarningLevel: 2
					},
					verbosity: 'quiet'
				}
			}
		},
		nunit: {                               
			dev: {                      
				src: ['src/WhereIs/bin/Debug/WhereIs.dll']
			}
		}
	});
	
	grunt.registerTask('dev', ['watch']);
}