require(['jquery', 'handlebars', 'util'], function($, hb, util) {
    util.ajaxHb({
        wrapper: "tpl",
        context: {
            "student": [{
                "name": "张三",
                "sex": "0",
                "age": 18
            }, {
                "name": "李四",
                "sex": "0",
                "age": 22
            }, {
                "name": "妞妞",
                "sex": "1",
                "age": 18
            }]
        },
        render: "#wrap-content"
    });
});
