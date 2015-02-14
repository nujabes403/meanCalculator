'use strict';

angular.module('cal').controller('HistoryController', ['$scope',
	function($scope) {
		// History controller logic
		// ...
        $scope.histories = [];

        $scope.$on("BcalculateFinished",function (event,calData){
            $scope.histories.push({expression:calData.expression,result:calData.result});
        });

        $scope.upHistory = function (expression){
            $scope.$emit("EclickedHistory", {
                expression:expression
            });

        };

        $scope.removeHistory = function (){
            $scope.histories = [];
        };
	}
]);
