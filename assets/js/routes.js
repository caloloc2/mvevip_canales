// Creación del módulo
var angularRoutingApp = angular.module('mvevip-call', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'assets/pages/dashboard.html',
            //controller  : 'Controller_Cotizaciones'
        })
        .when('/ventas', {
            templateUrl : 'assets/pages/ventas.html',
            //controller  : 'Controller_Cotizaciones'
        })
        .when('/clientes', {
            templateUrl : 'assets/pages/clientes.html',
            //controller  : 'Controller_Cotizaciones'
        })
        /*.when('/detalle_localidad/:id/:fi/:ff', {
            templateUrl : function($routeParams){
                return 'pages/detalle_localidad.php?id='+$routeParams.id+'&fi='+$routeParams.fi+'&ff='+$routeParams.ff;
            },
        })*/
        .otherwise({
            redirectTo: '/'
        }); 
});

// angularRoutingApp.config(['$locationProvider', function($locationProvider) {
//     //$locationProvider.html5Mode(true);
//     $locationProvider.hashPrefix('');
// }]);