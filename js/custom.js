var app=angular.module("resume",['ui.router']);
app.controller('Customers',[function(){
var vm=this;
vm.title='Customers';
vm.customers=[{name:'Aravinth'},{name:'London'}];
}]);
app.config(function($stateProvider){
var homestate={
	name:'home',
	url:'/home',
	template: '<h3>Homepage</h3>'
}
var aboutstate={
	name:'about',
	url:'/about',
	template:'<h3>About page</h3>'
}
$stateProvider.state(homestate);
$stateProvider.state(aboutstate);
});
