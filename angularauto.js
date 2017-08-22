var app =angular.module('myAppAuto',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
	     .when("/login", {
            templateUrl: "login.html",
            controller: "myCtrlAuto" 
		 }).when("/Home", {
            templateUrl: "home.html",
            controller: "home" 
		 }) .when("/Introduction", {
            templateUrl: "Introduction.html", 
		 }).when("/Manufacture", {
            templateUrl: "Manufacture.html",
            controller: "home"	
		 }).when("/Tiago", {
            templateUrl: "Tiago.html",	
		 }).when("/Ford", {
            templateUrl: "Ford.html",	
		 }).when("/Audi", {
            templateUrl: "Audi.html",				
         }).when("/sucess", {
            templateUrl: "sucess.html",				
        }).otherwise({
            redirectTo: '/login'
        });
}]);

app.controller('myCtrlAuto',function ($scope ,$location) {
	 $scope.records = [
	    {
		 "image":"images/Tata Hatch.jpg",
		 /* "picture":"Tiago.html" */
		 
	    },
	   {
		 "image":"images/indica.jpg",
		 /* "picture":"Tiago.html" */
	  }
	 ]
	 $scope.img = [
	    {
		 "image":"images/Tata Hatch.jpg",
		 
		 
	    },
	   {
		 "image":"images/indica.jpg",
		
	  }
	 ]
	
	window.onpopstate = function (e) { 
	   window.history.forward(1); 
	 }
	$scope.login =function () {
	 if($scope.Uname=="Anusha" && $scope.Pwd=="Anu")
	 {
	    $location.path('/Introduction');	 
	  
		  
	 }
	 else {
	  alert('invalid username and password'); 
	  } 
	}
	
});
app.controller('home',function ($scope) {
	$scope.msg = "WELCOME TO AUTO MOBILES"
});
app.controller('manufacture',function ($scope, $window,$location) {
	$scope.purchase =function (){
		if ($window.confirm("Please confirm?")) {
                    $location.path('/sucess');
                } else {
                    $location.path('/Manufacture');
                } 
	}
});

