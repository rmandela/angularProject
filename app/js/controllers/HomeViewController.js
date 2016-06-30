define(['app'], function(app)
{
	app.controller('HomeViewController',
    [
        '$scope',

        function($scope)
        {
            console.log('****hello****');
            $scope.page =
            {
                heading: 'Welcome'
            };
        }
    ]);
});