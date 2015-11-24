/**
 * Created by Bikas on 08/09/15.
 */
angular.module('sportsStore')
    .constant("dataUrl", "http://localhost:3000/app/products")
    .controller('sportsStoreCtrl',function($scope, $http, dataUrl){
        $scope.data = {};

        $http.get(dataUrl)
            .success(function(data){
                $scope.data.products = data;
            })
            .error(function(error){
                console.log('Error occured :: '+JSON.stringify(error));
                $scope.data.error = error;
            })

});