(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,a){e.exports=a(80)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=(a(47),a(48),a(49),a(18));var s=function(){return c.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top",id:"my-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-header"},c.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#navbar-collapse"},c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"})),c.a.createElement(o.b,{to:"/"},c.a.createElement("a",{href:"javascript:void(0)",className:"navbar-brand"},"Weather App"))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-collapse"},c.a.createElement("div",{className:"navbar-right"},c.a.createElement(o.b,{to:"/home"},c.a.createElement("a",{href:"javascript:void(0)",className:"btn btn-warning navbar-btn"},"Home")),c.a.createElement(o.b,{to:"/favorite"},c.a.createElement("a",{href:"javascript:void(0)",className:"btn btn-warning navbar-btn"},"Favorites"))))))},l=(a(54),a(7)),m=a(8),u=a(10),d=a(9),h=a(3),v=a(11),p=a(14),y=a(37),f=a.n(y),b=(a(59),"SELECTED_CITY"),E="01kbkrKWB8qHmTYOa1msIYfhtGLP191C",g=function(e,t){return function(a){!function(e,t,a){var n="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?metric=true&apikey=").concat(E);fetch(n).then((function(e){return e.json()})).then((function(n){n.cityName=e,n.cityId=t,function(e,t,a){var n="https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?getPhotos=true&apikey=").concat(E);fetch(n).then((function(e){return e.json()})).then((function(t){e.Images=t,a({type:b,payload:e})}))}(n,t,a)})).catch((function(e){alert("Accuweather API token is expired")}))}(e,t,a)}};var N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={cityId:"",cityName:"",autocompleteData:[]},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(h.a)(a)),a.onChange=a.onChange.bind(Object(h.a)(a)),a.onSelect=a.onSelect.bind(Object(h.a)(a)),a.getItemValue=a.getItemValue.bind(Object(h.a)(a)),a.renderItem=a.renderItem.bind(Object(h.a)(a)),a.retrieveDataAsynchronously=a.retrieveDataAsynchronously.bind(Object(h.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"retrieveDataAsynchronously",value:function(e){var t=this;if(""!=e){var a="https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(E,"&metric=false&q=").concat(e),n=new XMLHttpRequest;n.open("GET",a,!0),n.responseType="json",n.onload=function(){if(200==n.status){var e=[];n.response.forEach((function(t){var a={label:t.LocalizedName,value:t.Key};e.push(a)})),t.setState({autocompleteData:e})}else console.error("Cannot load data from remote source")},n.onerror=function(){alert("Accuweather API token is expired")},n.send()}else t.setState({autocompleteData:[]})}},{key:"onChange",value:function(e){this.setState({cityName:e.target.value}),this.retrieveDataAsynchronously(e.target.value)}},{key:"onSelect",value:function(e,t){this.setState({cityName:t.label,cityId:t.value})}},{key:"renderItem",value:function(e,t){return c.a.createElement("div",{key:e.value,style:{background:t?"lightgray":"white"}},e.label)}},{key:"getItemValue",value:function(e){return e.label}},{key:"handleClick",value:function(e){this.props.selectCity(this.state.cityName,this.state.cityId)}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.props.selectCity(this.state.cityName,this.state.cityId)}},{key:"render",value:function(){return c.a.createElement("div",{className:"SearchInput text-center"},c.a.createElement("div",{className:"inner-addon right-addon"},c.a.createElement(f.a,{getItemValue:this.getItemValue,items:this.state.autocompleteData,renderItem:this.renderItem,value:this.state.cityName,onChange:this.onChange,onSelect:this.onSelect,inputProps:{className:"form-control",placeholder:"Search",onKeyPress:this.handleKeyPress}}),c.a.createElement("i",{className:"glyphicon glyphicon-search",onClick:this.handleClick})),c.a.createElement("br",null))}}]),t}(n.Component),C=Object(p.b)(null,{selectCity:g})(N),j=(a(60),a(61),a(38)),O=a.n(j),k=(a(70),a(39)),D=(a(76),{content:{width:"600px",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}}),I=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.images.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("img",{src:e.src}))}));return c.a.createElement("div",{className:"CityDetailsModal"},c.a.createElement(O.a,{isOpen:this.props.modalIsOpen,onRequestClose:this.props.closeModal,style:D,contentLabel:"Images Modal"},c.a.createElement("div",{className:"CityImgModal"},c.a.createElement("i",{className:"glyphicon glyphicon-remove",onClick:this.props.closeModal}),c.a.createElement(k.Carousel,{showThumbs:!1,infiniteLoop:!0},e))))}}]),t}(c.a.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={modalIsOpen:!1},a.openModal=a.openModal.bind(Object(h.a)(a)),a.closeModal=a.closeModal.bind(Object(h.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){return c.a.createElement("div",{className:"CityDetails"},c.a.createElement("img",{src:this.props.data.img,alt:"city"}),c.a.createElement("div",{className:"info"},c.a.createElement("h1",null,this.props.data.name),c.a.createElement("div",{className:"degrees"},this.props.data.degrees,c.a.createElement("span",null,"\xb0c")),c.a.createElement("i",{className:"fa fa-search-plus",onClick:this.openModal})),c.a.createElement(I,{modalIsOpen:this.state.modalIsOpen,closeModal:this.closeModal,images:this.props.data.images}))}}]),t}(c.a.Component);a(77);var w=function(e){var t="glyphicon-heart-empty",a="btn-primary",n="Add to Favorites";return e.isFavorite&&(t="glyphicon-heart",a="btn-default",n="Remove from Favorite"),c.a.createElement("div",{className:"FavoriteBtn pull-right"},c.a.createElement("i",{className:"glyphicon "+t}),c.a.createElement("button",{type:"submit",className:"btn "+a,onClick:e.changeFavoriteBtn},n))};a(78);var F=function(e){return c.a.createElement("div",{className:"col-md-5ths"},c.a.createElement("div",{className:"day text-center"},c.a.createElement("h3",null,e.item.day),c.a.createElement("div",{className:"degrees"},e.item.degrees,c.a.createElement("span",null,"\xb0c"))))};var M=function(e){var t=e.data.map((function(e){return c.a.createElement(F,{key:e.id,item:e})}));return c.a.createElement("div",{className:"WeeklyWeather col-xs-12"},t)},x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleFavoriteBtn=a.handleFavoriteBtn.bind(Object(h.a)(a)),a.handleMyLocationWeather=a.handleMyLocationWeather.bind(Object(h.a)(a)),a.geolocationSuccess=a.geolocationSuccess.bind(Object(h.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"checkFavorite",value:function(){var e=!1,t=this.props.cityData;return this.props.favoritesData.forEach((function(a){a.id==t.cityDetails.id&&(e=!0)})),e}},{key:"handleFavoriteBtn",value:function(){var e=this.props.cityData.cityDetails;e.isFavorite=!this.checkFavorite(),this.props.getFavoritesCity(e)}},{key:"handleMyLocationWeather",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.geolocationSuccess,this.geolocationError):alert("Geolocation is not supported by your browser")}},{key:"geolocationSuccess",value:function(e){var t=this,a=e.coords.latitude,n=e.coords.longitude,c="".concat(a,",").concat(n),r="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(E,"&q=").concat(c),i=new XMLHttpRequest;i.open("GET",r,!0),i.responseType="json",i.onload=function(){200==i.status?t.props.selectCity(i.response.LocalizedName,i.response.Key):console.error("Cannot load data from remote source")},i.send()}},{key:"geolocationError",value:function(){alert("Unable to retrieve your location")}},{key:"getInitialHtml",value:function(){return c.a.createElement("div",{className:"SearchResultsInitial"},c.a.createElement("h2",null,"Select City"),c.a.createElement("a",{href:"javascript:void(0);",onClick:this.handleMyLocationWeather},"Show me the weather for my location"))}},{key:"getSelectedCityHtml",value:function(e){var t=this.checkFavorite();return c.a.createElement("div",{className:"SearchResults"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-6"},c.a.createElement(S,{data:e.cityDetails})),c.a.createElement("div",{className:"col-xs-6"},c.a.createElement(w,{isFavorite:t,changeFavoriteBtn:this.handleFavoriteBtn}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h2",null,e.cityDetails.dayWeather)))),c.a.createElement("div",{className:"row"},c.a.createElement(M,{data:e.weeklyWeather})))}},{key:"render",value:function(){var e=this.props.cityData;return null==e?this.getInitialHtml():this.getSelectedCityHtml(e)}}]),t}(c.a.Component),L=Object(p.b)((function(e){return{cityData:e.selectedCityData.selectedCity,favoritesData:e.favoritesCityData.favoritesCity}}),{getFavoritesCity:function(e){return{type:"FAVORITES_CITY",payload:e}},selectCity:g})(x);var W=function(){return c.a.createElement("div",{className:"HomeScreen"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(C,null),c.a.createElement(L,null))))};a(79);var T=function(e){return c.a.createElement("div",{className:"col-md-5ths"},c.a.createElement("div",{className:"city text-center"},c.a.createElement("h3",null,e.item.name),c.a.createElement("div",{className:"degrees"},e.item.degrees,c.a.createElement("span",null,"\xb0c")),c.a.createElement("h4",null,e.item.dayWeather)))},A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.favoritesCityData.map((function(e){return c.a.createElement(T,{key:e.id,item:e})}));return c.a.createElement("div",{className:"FavoritesCity col-xs-12"},e)}}]),t}(c.a.Component),P=Object(p.b)((function(e){return{favoritesCityData:e.favoritesCityData.favoritesCity}}))(A);var R=function(){return c.a.createElement("div",{className:"FavoriteScreen"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(P,null))))},B=a(16);var H=function(){return c.a.createElement("div",{className:"MainContent"},c.a.createElement(B.c,null,c.a.createElement(B.a,{path:"/",exact:!0,component:W}),c.a.createElement(B.a,{path:"/ReactReduxWeatherApp",component:W}),c.a.createElement(B.a,{path:"/home",component:W}),c.a.createElement(B.a,{path:"/favorite",component:R})))};var V=function(){return c.a.createElement(o.a,{basename:"/ReactReduxWeatherApp"},c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement(H,null)))},K=a(15),q=a(40),Y=a(20),G={selectedCity:null};function _(e){var t={cityDetails:{}};return t.cityDetails.id=e.cityId,t.cityDetails.name=e.cityName,t.cityDetails.degrees=e.DailyForecasts[0].Temperature.Maximum.Value,t.cityDetails.dayWeather=e.DailyForecasts[0].Day.IconPhrase,t.cityDetails.img=e.Images[0].Photos[0].LandscapeLink.replace("L.jpg","S.jpg"),t.cityDetails.images=[],e.Images[0].Photos.forEach((function(e,a){var n={};n.id=a,n.src=e.LandscapeLink.replace("L.jpg","S.jpg"),t.cityDetails.images.push(n)})),t.weeklyWeather=[],e.DailyForecasts.forEach((function(e,a){var n={};n.id=a,n.day=function(e){switch(new Date(e).getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";default:return""}}(e.Date),n.degrees=e.Temperature.Maximum.Value,t.weeklyWeather.push(n)})),t}var z=a(41),J={favoritesCity:[]},X=Object(K.c)({selectedCityData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(Y.a)({},e,{selectedCity:_(t.payload)});default:return e}},favoritesCityData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAVORITES_CITY":var a=t.payload,n=a.id,c=a.isFavorite;if(c)return Object(Y.a)({},e,{favoritesCity:[].concat(Object(z.a)(e.favoritesCity),[t.payload])});var r=[];return e.favoritesCity.forEach((function(e){e.id!=n&&r.push(e)})),Object(Y.a)({},e,{favoritesCity:r});default:return e}}}),U=[q.a],Q=Object(K.e)(X,Object(K.d)(K.a.apply(void 0,U)));i.a.render(c.a.createElement(p.a,{store:Q},c.a.createElement(V,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1a1a9449.chunk.js.map