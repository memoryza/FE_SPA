define("main",function(a,b,c){var d=(a("msg"),a("route")),e=a("log"),f=a("util"),g=a("tips"),h=a("template"),i=a("zepto"),j=a("request"),k={container:i("#appContainer"),changeTab:function(a){var b=i(this),c=b.closest("li"),g=b.attr("href");if(c.hasClass("current"))return!1;c.addClass("current").siblings().removeClass("current"),e.add("top_menu_click"),d.toPage(a,g,null,"");var h=f.getQueryParam(g);h.act&&k.reqAct(h.act)},reqAct:function(a){var b=(k.container.find("._title").clone(),k.container.find("._dataLi").clone(),+new Date);g.loading(k.container),j.req({act:a},function(c){var d=1e3-(+new Date-b);setTimeout(function(){k.container.html(f.templateEngine(h.getGameListTpl(),{gameList:c.data,act:a}))},d)},function(){g.toast("获取列表内容失败。")},function(){g.toast("网络请求错误")})}};i("#menuList").on("click","._linkTo",k.changeTab),d.init({act:"news"})});