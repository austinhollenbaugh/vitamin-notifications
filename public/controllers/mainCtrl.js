angular.module("vitaminApp").controller("mainCtrl", function($scope, mainService) {

  $scope.sendMessage = (msg) => {
    console.log(msg);
    mainService.sendMessage(msg).then((response) => {

    });
  };

}); //end controller
