(this["webpackJsonpdiplom-work"]=this["webpackJsonpdiplom-work"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),s=a(12),m=a(17),i=a(1),o=function(e){var t=e.title.split(" "),a=t[0],n=t.slice(1,t.length-1).join(" "),c=t[t.length-1];return l.a.createElement("h1",{className:"title"},l.a.createElement("span",{className:"title__start"},a," "),n," ",l.a.createElement("span",null,c))},u=a(3),E=function(e){var t=function(e){return e<10?"0"+e:e},a=Date.parse(e.time),n=new Date(a),c=t(n.getMonth()+1),r=t(n.getDate());return l.a.createElement("div",{className:"news__date"},l.a.createElement("span",null,r),"/",l.a.createElement("span",null,c))},_=function(e){return l.a.createElement("div",{className:"news__item"},l.a.createElement("h4",{className:"news__title"},l.a.createElement(u.b,{to:"/news/".concat(e.item.title)},e.item.description||e.item.title)),l.a.createElement("div",{className:"news__footer"},l.a.createElement("a",{href:e.item.url,className:"news__source",target:"_blank"},e.item.source.name),l.a.createElement(E,{time:e.item.publishedAt})))},p=function(){return l.a.createElement("div",{className:"news__loader"},l.a.createElement("img",{src:"https://airport.by/images/loader.gif"}))},f=function(e){return e.content.length?l.a.createElement("div",{className:"news__block"},l.a.createElement(o,{title:e.title}),l.a.createElement("div",{className:"news__items"},e.content.map((function(e){return l.a.createElement(_,{key:e.title,item:e})})))):l.a.createElement(p,null)},h=function(){return l.a.createElement("div",{className:"contacts__block"},l.a.createElement("div",{className:"contacts__info"},l.a.createElement("a",{href:"tel:79276983443",className:"title"},l.a.createElement("span",null,"+7 (927) 698 34 43")),l.a.createElement("h4",{className:"news__title"},l.a.createElement("a",{href:"https://t.me/ketrinkash",target:"_blank"},"\u041a\u0430\u0448\u043b\u0435\u0432\u0430",l.a.createElement("span",null,"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430"))),l.a.createElement("a",{href:"mailto:kashleva2009@yandex.ru",className:"contacts__link"},"kashleva2009@yandex.ru"),l.a.createElement("div",{className:"contacts__footer"},l.a.createElement("p",null,"JavaScript \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"),l.a.createElement("p",null,"ES5, ES6, ",l.a.createElement("a",{href:"https://ru.reactjs.org/",target:"_blank"},"React")))),l.a.createElement("img",{src:"https://sun9-17.userapi.com/c855432/v855432730/146765/0rBTXO8PjEo.jpg",className:"contacts__img"}))},N=function(e){return l.a.createElement("div",{className:"main__block"},l.a.createElement(f,{title:e.title,content:e.content,handleCurrentNews:e.handleCurrentNews}),l.a.createElement(u.b,{to:"/news",className:"main__link"},"\u0411\u044b\u0442\u044c \u0432 \u043a\u0443\u0440\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"))},d=Object(i.e)((function(e){var t=e.location.pathname.split("/"),a=t[t.length-1],n=e.news&&e.news.find((function(e){return e.title===a}));return n?l.a.createElement("div",{className:"news__detail"},l.a.createElement("div",{className:"news__info"},l.a.createElement(o,{title:n.title}),l.a.createElement("a",{href:n.url,className:"news__source",target:"_blank"},n.source.name),l.a.createElement(E,{time:n.publishedAt})),l.a.createElement("div",{className:"news__content"},l.a.createElement("img",{src:n.urlToImage,className:"news__img"}),l.a.createElement("p",null,n.content))):l.a.createElement(p,null)})),v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=a.filter((function(e,t){return t<6?e:null})),o="http://newsapi.org/v2/top-headlines?country=us&apiKey=9babfe25f9334478ab5fa17bf649ffef";return Object(n.useEffect)((function(){fetch(o).then((function(e){return e.json()})).then((function(e){var t=e.articles.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{title:e.title.replace(/%/gi,"percent")})}));c(t)}))}),[o]),l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{path:"/",exact:!0,component:function(){return l.a.createElement(N,{title:"\u0412\u0441\u0435\u0433\u0434\u0430\r \u0441\u0432\u0435\u0436\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",content:r})}}),l.a.createElement(i.a,{path:"/news",exact:!0,component:function(){return l.a.createElement(f,{title:"\u0411\u044b\u0442\u044c \r \u0432 \u043a\u0443\u0440\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439",content:a})}}),l.a.createElement(i.a,{path:"/contacts",exact:!0,component:h}),l.a.createElement(i.a,{path:"/news/:id",exact:!0,component:function(){return l.a.createElement(d,{news:a})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28),a(29);var w=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(u.b,{to:"/",className:"logo"},"\u041d\u043e\u0432\u043e\u0441\u0442\u043d\u0438\u043a",l.a.createElement("span",null,"Single Page Application")),l.a.createElement("p",null,"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"),l.a.createElement("p",{className:"logo"},l.a.createElement("span",{className:"text-right"},"Made by"),"\u041a\u0430\u0442\u0435\u0440\u0438\u043d\u0430 \u041a\u0430\u0448\u043b\u0435\u0432\u0430"))},g=function(){return l.a.createElement("header",{className:"header"},l.a.createElement(u.b,{to:"/",className:"logo"},"\u041d\u043e\u0432\u043e\u0441\u0442\u043d\u0438\u043a"),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",{className:"menu__item"},l.a.createElement(u.b,{to:"/",exact:!0,className:"menu__link",activeClassName:"menu__link_active"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(u.b,{to:"/news",className:"menu__link",activeClassName:"menu__link_active"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(u.b,{to:"/contacts",className:"menu__link",activeClassName:"menu__link_active"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))))};r.a.render(l.a.createElement(u.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.671d73b5.chunk.js.map