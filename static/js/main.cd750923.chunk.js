(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"pug",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/cole.png?raw=true"},{id:2,name:"aussie",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/aussie.jpg?raw=true"},{id:3,name:"bernese",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/bernese.jpg?raw=true"},{id:4,name:"bulldog",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/bulldog.jpg?raw=true"},{id:5,name:"dachshund",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/dachshund.jpg?raw=true"},{id:6,name:"german",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/german.jpg?raw=true"},{id:7,name:"golden",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/golden.jpg?raw=true"},{id:8,name:"husky",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/husky.jpg?raw=true"},{id:9,name:"lab",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/lab.png?raw=true"},{id:10,name:"pitbulls",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/pitbulls.jpg?raw=true"},{id:11,name:"pomsky",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/pomsky.jpg?raw=true"},{id:12,name:"samoyed",image:"https://github.com/tmd913/clicky-game-react/blob/master/public/images/samoyed.jpg?raw=true"}]},,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(3),i=a.n(r),s=a(7),l=a(4),o=a(5),m=a(8),u=a(6),g=a(9),d=(a(15),function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("div",null,n.a.createElement("ul",{className:"navbar-nav text-center"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game")),n.a.createElement("li",{className:"nav-item"},e.firstTurn?"Click an image to begin!":!1===e.repeat?"You guessed correctly!":"You guessed incorrectly!"),n.a.createElement("li",{className:"nav-item"},"Score: ",n.a.createElement("span",null,e.score)," | Top Score: ",n.a.createElement("span",null,e.topScore)))))}),p=(a(17),function(e){return n.a.createElement("main",Object.assign({className:"wrapper"},e),e.children)}),b=(a(19),function(){return n.a.createElement("footer",{className:"footer text-center"},n.a.createElement("span",null,"Clicky Game"))}),h=(a(21),function(e){return n.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e),e.children)}),f=a(1),k=(a(23),function(e){return n.a.createElement("img",{alt:"Character",src:e.src,"data-id":e.id,onClick:e.handleClick})}),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dogs:[],clicked:[],repeat:!1,score:0,topScore:0,firstTurn:!0},a.displayDogs=function(){return a.state.dogs.map(function(e,t){return n.a.createElement(k,{key:t,src:e.image,id:e.id,handleClick:a.handleClick})})},a.shuffleDogs=function(){for(var e,t,a=f.slice(),c=a.length;c>0;)t=Math.floor(Math.random()*c--),e=a[c],a[c]=a[t],a[t]=e;return a},a.handleClick=function(e){var t=e.target.dataset.id;a.checkClickedDogs(t),a.displayDogs()},a.updateState=function(e){a.setState(e)},a.handleGameOver=function(e,t){a.updateState({repeat:!e}),setTimeout(function(){a.updateState({dogs:f,clicked:[],repeat:!1,score:0,topScore:t>a.state.topScore?t:a.state.topScore,firstTurn:!0})},1e3)},a.checkClickedDogs=function(e){var t=!!a.state.clicked.includes(e),c=Object(s.a)(a.state.clicked).concat([e]),n=a.shuffleDogs(),r=t?a.state.score:a.state.score+1,i={dogs:n,clicked:c,repeat:t,score:r,firstTurn:!1};t||12===r?a.handleGameOver(!t,r):a.updateState(i)},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dogs:f})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{firstTurn:this.state.firstTurn,repeat:this.state.repeat,score:this.state.score,topScore:this.state.topScore}),n.a.createElement(p,null,n.a.createElement(h,null,this.displayDogs())),n.a.createElement(b,null))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.cd750923.chunk.js.map