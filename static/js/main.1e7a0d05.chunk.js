(this["webpackJsonprestaurant-name"]=this["webpackJsonprestaurant-name"]||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(10),i=a.n(c),r=a(13),o=a(9),d=a(11),l=a(4),h=a(6),u=a(7),m=a(5),j=a(12),b=a.n(j),v=(a(39),a(14)),p=a(0),O=function(e){var t=e.cartDishes;return Object(p.jsx)("div",{className:"header-container",children:Object(p.jsxs)("div",{className:"header-responsive-container",children:[Object(p.jsx)("h1",{className:"restaurent-heading",children:" UNI Resto Cafe "}),Object(p.jsxs)("div",{className:"cart-container",children:[Object(p.jsx)("p",{className:"cart-heading",children:" My Orders"}),Object(p.jsx)(v.a,{size:25}),Object(p.jsxs)("p",{className:"cart-dishes",children:[" ",t.length," "]})]})]})})},f=(a(41),function(e){var t=e.details,a=e.isActive,n=e.setActiveTab,s=a?"tab-btn-active":"";return Object(p.jsx)("li",{className:"tab-item",children:Object(p.jsx)("button",{className:"tab-btn ".concat(s),type:"button",onClick:function(){n(t)},children:t.menu_category})})}),x=(a(42),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={itemCount:0},e.onAddDish=function(){var t=e.props,a=t.details,n=t.addItemToCart;e.setState((function(e){return{itemCount:e.itemCount+1}})),n(a.dish_id)},e.onRemoveDish=function(){var t=e.state.itemCount,a=e.props,n=a.details,s=a.removeItemFromCart;t>=1?e.setState((function(e){return{itemCount:e.itemCount-1}})):e.setState({itemCount:0}),s(n.dish_id)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.itemCount,t=this.props.details,a=1===t.dish_Type?"https://res.cloudinary.com/drnrrd97f/image/upload/v1698935231/non-vegggg_dh8khm.jpg":"https://res.cloudinary.com/drnrrd97f/image/upload/v1698934824/_d3f8423af5d5ceeeb5baca2d56a1caa8f9b7db5920170905-6221-j2o9ot_p1jezr.jpg",n=t.dish_description.slice(0,60),s=0!==t.addonCat.length,c=t.dish_Availability?Object(p.jsxs)("div",{className:"buttons-container",children:[Object(p.jsxs)("button",{className:"minus-btn",type:"button",onClick:this.onRemoveDish,children:[" ","-"," "]}),Object(p.jsxs)("p",{className:"add-btn",children:[" ",e," "]}),Object(p.jsxs)("button",{className:"plus-btn",type:"button",onClick:this.onAddDish,children:[" ","+"," "]})]}):Object(p.jsx)("p",{className:"not-available-text",children:" Not available "});return Object(p.jsx)("li",{className:"dish-item-container",children:Object(p.jsxs)("div",{className:"dish-details-container",children:[Object(p.jsxs)("div",{className:"dish-container",children:[Object(p.jsx)("img",{src:a,className:"dish-type-img",alt:"vegornonvegimage"}),Object(p.jsxs)("div",{className:"dish-text-details",children:[Object(p.jsxs)("h1",{className:"dish-heading",children:[" ",t.dish_name," "]}),Object(p.jsxs)("p",{className:"dish-currency",children:[" ",t.dish_currency," ",t.dish_price," "]}),Object(p.jsxs)("p",{className:"dish-description",children:[" ",n," "]}),c,s&&Object(p.jsx)("p",{className:"custom",children:" Customizations available"})]})]}),Object(p.jsxs)("p",{className:"calories-heading",children:[" ",t.dish_calories," calories "]}),Object(p.jsx)("img",{src:t.dish_image,alt:t.dish_name,className:"dish-img"})]})})}}]),a}(n.Component)),g=x,N=(a(43),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,data:[],activeTab:"",cartDishes:[]},e.makeApiCall=Object(d.a)(Object(o.a)().mark((function t(){var a,n,s,c,i;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc",t.next=3,fetch("https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc");case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,a.ok&&(s=n.map((function(e){return e.table_menu_list})),c=s.flat(1),i=c.map((function(e){return e.menu_category})),e.setState({data:c,isLoading:!1,activeTab:i[0]}));case 8:case"end":return t.stop()}}),t)}))),e.setActiveTab=function(t){e.setState({activeTab:t.menu_category})},e.renderContent=function(){var t=e.state,a=t.data,n=t.activeTab,s=a.find((function(e){return e.menu_category===n}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:"tabs-container",children:a.map((function(t){return Object(p.jsx)(f,{details:t,setActiveTab:e.setActiveTab,isActive:n===t.menu_category},t.menu_category_id)}))}),Object(p.jsx)("ul",{className:"dishes-container",children:s.category_dishes.map((function(t){return Object(p.jsx)(g,{details:t,addItemToCart:e.addItemToCart,removeItemFromCart:e.removeItemFromCart},t.dish_id)}))})]})},e.removeItemFromCart=function(t){var a=e.state.cartDishes,n=a.indexOf(t);if(-1!==n){a.splice(n,1);e.setState({cartDishes:a})}},e.addItemToCart=function(t){e.setState((function(e){return{cartDishes:[].concat(Object(r.a)(e.cartDishes),[t])}}))},e.renderLoader=function(){return Object(p.jsx)("div",{className:"loader-container",children:Object(p.jsx)(b.a,{type:"TailSpin",width:50,height:50})})},e.renderPageContent=function(){var t=e.state.cartDishes;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{cartDishes:t}),Object(p.jsx)("div",{className:"home-container",children:Object(p.jsx)("div",{className:"home-responsive-container",children:e.renderContent()})})]})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.makeApiCall()}},{key:"render",value:function(){return this.state.isLoading?this.renderLoader():this.renderPageContent()}}]),a}(n.Component)),C=N,y=(a(44),function(){return Object(p.jsx)(C,{})});i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1e7a0d05.chunk.js.map