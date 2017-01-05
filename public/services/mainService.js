angular.module("vitaminApp").service("mainService", function($http) {

  this.sendMessage = () => {
    return $http({
      method: "POST",
      url: "http://localhost:3000/text",
      data: {
        to: "me",
        from: "me",
        message: $scope.message
      }
    }).then((response) => {
      console.log(response);
    })
  }

}); //end service
