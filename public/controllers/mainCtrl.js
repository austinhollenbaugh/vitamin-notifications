angular.module("vitaminApp").controller("mainCtrl", function($scope, mainService) {

  $scope.sendMessage = (msg) => {
    $scope.message = "";
    mainService.sendMessage(msg).then((response) => {

    });
  };

}); //end controller
