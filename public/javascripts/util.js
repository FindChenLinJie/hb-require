// 定义一个模块 并暴露接口
define(['jquery', 'handlebars'], function($, hb) {
    
    /**
     * 用于渲染请求数据的模板通用函数功能
     * @param  {[type]} obj [wrapper：模板id context:模板数据 render：HTML渲染模板]
     */
    function ajaxHb(obj) {
        //用jquery获取模板
        var wrap = "#" + obj.wrapper;
        var tpl = $(wrap).html();

        //原生方法
        var source = document.getElementById(obj.wrapper).innerHTML;

        //预编译模板
        var template = hb.compile(source);

        //模拟json数据
        var context = obj;

        //匹配json内容
        var html = template(obj.context);

        //输入模板
        $(obj.render).html(html);
    };

    // 暴露接口
    return {
        ajaxHb: ajaxHb
    }
});
