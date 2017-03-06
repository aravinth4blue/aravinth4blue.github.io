var app=angular.module("resume",[]).controller('Customers',[function(){
var vm=this;
console.log(vm);
vm.title='Customers';
vm.customers=[{name:'Aravinth',name:'London'}];
}]);
console.log(app);
