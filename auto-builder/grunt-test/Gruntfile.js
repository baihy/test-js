// grunt自动构建工具的配置文件
// 注意这个是一个js文件，且文件名必须固定为：Gruntfile.js
module.exports = function (grunt) {
    // 初始化grunt的任务
    grunt.initConfig({
        // 属性的名称就是任务名，这些配置官网上都是有的
        concat: {
            options: {
                separator: ";"  // 就是两个js文件内容之间用分号隔开
            },
            dist: {
                //src: ["src/js/demo1.js", "src/js/demo2.js"], // 要合并的源文件数组
                src: ["src/js/*.js"], // 要合并的源文件数组
                dest: "build/js/demo.js"  // 要把js合并之后输入到哪儿
            }
        },
        /*********************************************************************/
        pkg: grunt.file.readJSON('package.json'),  // 含义是：读取package.json文件
        uglify: { // 任务名称
            options: {
                // 压缩文件时，可以执行输出到压缩文件里面的banner信息
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    // 键值对的含义是：键是：压缩之后的js路径，值是：压缩前的js，可以先压缩，后合并
                    'build/js/demo.min.js': ['build/js/demo.js']
                }
            }
        },
        /*********************************************************************/
        jshint: {
            options: {
                jshintrc: '.jshintrc' //指定配置文件。这里也可不指定，直接作为对象赋值给jshintrc属性。
            },
            build: ['Gruntfile.js', 'src/js/*.js'] //需要检测的文件
        },
        /*********************************************************************/
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/css/*.css'],
                //tasks: ['concat', 'jshint', 'uglify', 'cssmin'],
                tasks: ['concat', 'jshint', 'uglify'],
                options: {spawn: false}
                // spawn含义是大量的，就是否更新所有的文件。true表示的是更新所有的文件，false的话，表示的是只更新发生改变的文件
                //  如果设置为false ，如果只改了css文件的话，就只会执行和csss文件相关的任务。其他的任务不执行。
                // 主要的区别是：执行部分任务，还是执行全部任务
            }
        }


    });
    // 表示的是执行grunt命令的时候，加载指定grunt任务插件。
    grunt.loadNpmTasks('grunt-contrib-concat'); // 合并js代码
    grunt.loadNpmTasks('grunt-contrib-uglify'); // 压缩js文件
    grunt.loadNpmTasks('grunt-contrib-jshint'); // js语法检查
    grunt.loadNpmTasks('grunt-contrib-watch'); // 监控源代码的改变，自动
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // 表示是注册grunt的默认的任务。后面表示的含义是：执行默认任务时候，要依赖的任务。
    // 上面定义了两个任务，每次执行都需要通过grunt + 任务名来执行任务，这样太麻烦了。我们可以需要执行的任务放到default任务中，我们只需要通过grunt default即可
    // 且运行默认的任务的话，不用加default参数
    grunt.registerTask('default', ["jshint", "concat", "uglify"]); // 特别注意：任务有先后顺序，任务的执行是同步的。要压缩的文件，是合并之后的文件。
    grunt.registerTask('mywatch', ["default", "watch"]); // 特别注意：任务有先后顺序，任务的执行是同步的。要压缩的文件，是合并之后的文件。
};