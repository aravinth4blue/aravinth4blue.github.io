var app=angular.module("resume",['ui.router']).controller('Customers',[function(){
var vm=this;
vm.title='Customers';
vm.customers=[{name:'Aravinth'},{name:'London'}];
}]);
app.config(function($stateprovider){
var homestate={
	name:'Home',
	url:'/home',
	template: '<h3>Homepage</h3>'
}
var aboutstate={
	name:'about',
	url:'/about',
	template:'<h3>About page</h3>'
}
$stateprovider.state(homestate);
$stateprovider.state(aboutstate);
});
