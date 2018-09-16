(function () {
    // ===============================================================================
    // Config
    //

    function config($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        // Default url
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true)
        $locationProvider.hashPrefix("!");

        $ocLazyLoadProvider.config({
            debug: false
        });

        // Routes
        $stateProvider
            .state('pages', {
                abstract: true,
                url: '/',
                templateUrl: 'views/common/layout.html',
            })
            .state('pages.main', {
                url: '',
                templateUrl: 'views/main.html',
                data: {pageTitle: 'Main page'},
            })

            .state('pages.service', {
                url: 'service',
                templateUrl: 'views/service.html',
                data: {pageTitle: 'service'},
            })
            .state('pages.team', {
                url: 'team',
                templateUrl: 'views/team.html',
                data: {pageTitle: 'Team'},
            })
            .state('pages.last_project', {
                url: 'last_project',
                templateUrl: 'views/last_project.html',
                data: {pageTitle: 'Last Project'},
                controller:'list_project'
            })
            .state('pages.project_detail', {
                url: 'detail_project/:index',
                templateUrl: 'views/last_project_detail.html',
                data: {pageTitle: 'Last Project'},
                controller:'detail_project'
            })


            .state('pages.second', {
                url: '/second',
                templateUrl: 'views/second.html',
                data: {pageTitle: 'Second page'},
                resolve: {
                    // Load plugins here
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([]);
                    },
                },
            });
    };

    function run($rootScope, $state) {
        $rootScope.$state = $state;

        $rootScope.$on('$stateChangeStart', function () {
            // Restart page loader
            if (window.Pace && typeof window.Pace.restart === 'function') {
                window.Pace.restart();
            }
        });
    }

    angular.module('pixeladmin')
        .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider', config])
        .run(['$rootScope', '$state', run]);

})();
