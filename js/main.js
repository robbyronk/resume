(function () {
  angular.module('resume', ['ngResource'])
    .controller('ResumeController', ['$scope', 'Perspectives', 'Projects',
      function(scope, Perspectives, Projects) {
        scope.setActiveFilter = function(filter) {
          scope.activeFilter = filter;
        };

        scope.updateProjectFilterList = function(activePerspective) {
          scope.activePerspective = activePerspective;
          scope.projectFilters = _.first(_.filter(scope.perspectives, 
            function(p) { 
              return p.view === activePerspective;
            })).filters;
          scope.activeFilter = _.first(scope.projectFilters);
        };

        scope.projects = Projects.query();

        scope.perspectives = Perspectives.query(function() {
          var loadFirst = "Languages";
          scope.activePerspective = loadFirst;
          
          scope.updateProjectFilterList(loadFirst);
        });
      }
    ])
    .factory('Perspectives', ['$resource', 
      function(resource) {
        return resource('data/perspectives.json');
      }
    ])
    .factory('Projects', ['$resource', 
      function(resource) {
        return resource('data/projects.json');
      }
    ]);
})();
