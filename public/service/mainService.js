angular.module("vitaminApp").service("mainService", function($http) {

  this.sendMessage = (message) => {
    console.log(message);
    return $http({
      method: "POST",
      url: "http://localhost:3000/text",
      data: {
        to: "+" + 12534313212,
        from: "+" + 12534667510,
        message: message
      }
    }).then((response) => {
      console.log(response);
    });
  };

});
