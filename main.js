var main=angular.module('practise',['ui.router','ui.bootstrap','oc.lazyLoad']);

main.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/app');
    $stateProvider
    .state('app',{
        abstract:false,
        url:'/app',
        templateUrl:'app/views/app.html'
    })
    // .state('app.dashboard',{
    //     abstract:false,
    //     url:'/app',
    //     templateUrl:'app/views/pages/dashboard.html'
    // })
    // .state('app',{
    //     abstract:true,
    //     url:'/app',
    //     templateUrl:'app/views/pages/app.html'
    // })
});