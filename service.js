angular.module('myApp').factory('logger', function() {
  var log = [];

  return {
    log: function(message, location) {
      log.push({
        message: message,
        location: location,
        date: new Date()
      });
    },
    getLogs: function() {
      return log.reverse();
    }
  };
});
