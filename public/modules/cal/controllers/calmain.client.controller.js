'use strict';

angular.module('cal').controller('CalmainController', ['$scope',
	function($scope) {
		// Calmain controller logic
		// ...

        $scope.$on("EclickedHistory", function (event,data){
            $scope.$broadcast("BclickedHistory",{
                expression:data.expression
            });
        });

        $scope.$on("EcalculateFinished", function (event,data){
            $scope.$broadcast("BcalculateFinished",{
                expression:data.expression,
                result:data.result
            });
        });

	}
]);
