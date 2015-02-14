'use strict';

angular.module('cal').controller('CalController', ['$scope',
	function($scope) {
		// Cal controller logic
		// ...

        $scope.calArr1 = [1,2,3];
        $scope.calArr2 = [4,5,6];
        $scope.calArr3 = [7,8,9];

        $scope.inputBar = new Array();
        $scope.inputBarResult;
        $scope.operators = ['+','-','*','/','(',')'];


        $scope.inputToCal = function (input){

            if($scope.inputBar.length==0 && input == 0){
                alert("You can't input 0 first");
                return;
            }
            $scope.inputBar.push(input);
            $scope.inputBarResult = $scope.inputBar.join("");
        };

        $scope.calculate = function (){
            $scope.result = eval($scope.inputBarResult);
            $scope.$emit("EcalculateFinished",{
                expression:$scope.inputBarResult,
                result:$scope.result
            });
        };

        $scope.erase = function(){
            $scope.inputBar.pop();
            $scope.inputBarResult = $scope.inputBar.join("");
        };

        $scope.allReset = function (){
            $scope.inputBarReset();
        };

        $scope.inputBarReset = function (){
            $scope.inputBar = new Array();
            $scope.inputBarResult = 0;
        };

        $scope.$on("BclickedHistory",function (event,data){
            $scope.inputBar = data.expression.split('');
            $scope.inputBarResult = data.expression;
        });
	}
]);
