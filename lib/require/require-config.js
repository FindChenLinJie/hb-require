require.config({
    /* 配置组件的别名,省去写路径,可省略JS后缀名 */
    /* baseurl不配置,因为引用路径较多 */
    /* 路径相对是引用html为基准 */
    paths: {
        'jquery': '../lib/jquery/jquery',
        'handlebars': '../lib/handlebars/handlebars-v4.0.5',
        'util':'../public/javascripts/util'
    },
    shim: {
        /**
         * exports,init 导出模块
         * init:function () {
              return {
                  fail: fail,
                  success: success,
              }
            }
         * deps依赖的组件
         */
        'handlebars': {
            deps: ['jquery']
        },
        'util':{
          deps: ['jquery','handlebars']
        }
    }
});