angular.module("vitaminApp").service("mainService", function($http) {

  this.sendMessage = function(message) {
    // console.log(message);
    return $http({
      method: "POST",
      url: "http://localhost:3000/manualText",
      data: {
        to: "+" + 12534313212,
        from: "+" + 12534667510,
        message: message
      }
    }).then((response) => {
      console.log(response);
    });
  };

  // this.receiveResponse = 

});
