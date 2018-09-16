(function() {
  // ===============================================================================
  // Controllers / Main
  //

  function MainCtrl() {
    this.companyName = 'Your Company';
    this.username = 'User Name';
  }

  function listProject($http,$stateParams,$scope) {

      $http.get("data/last_project.json")
          .then(function(response) {
              $scope.projects = response.data.data;
          });
  }

  function DetailProject($http,$stateParams,$scope) {

      $http.get("data/last_project.json")
          .then(function(response) {
              $scope.project = response.data;
          });
  }

  angular.module('pixeladmin')
    .controller('MainCtrl', MainCtrl)
    .controller('detail_project', DetailProject)
    .controller('list_project', listProject);

})();
