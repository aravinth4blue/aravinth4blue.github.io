var app=angular.module("resume",[]).controller('Customers',[function(){
var vm=this;
vm.title='Customers';
vm.customers=[{name:'Aravinth'},{name:'London'}];
}]);
console.log(vm);
console.log(app);
