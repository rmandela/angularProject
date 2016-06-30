define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'app/partials/home.html',
                dependencies: [
                    '../js/controllers/HomeViewController'
                ]
            }
        }
    };
});