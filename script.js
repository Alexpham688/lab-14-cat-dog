(function(){
  var app=angular.module("catDog",["ngRoute"]);
  app.config(function($routeProvider){
    $routeProvider.when("/cat",{
      templateUrl:"views/cat.html"

    });
    $routeProvider.when("/dog",{
      templateUrl:"views/dog.html"
    });
    $routeProvider.otherwise ({
      template:"click on the link"
    });



  });
})();
