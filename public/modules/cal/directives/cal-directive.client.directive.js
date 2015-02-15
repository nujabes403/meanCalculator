'use strict';

angular.module('cal')
    .directive('calApp',function(){
        return {
            restrict:"E",
            controller:"CalController",
            templateUrl:"modules/cal/views/cal.client.view.html"
        };
    })
    .directive('historyPart',function(){
        return {
            restrict:"E",
            controller:"HistoryController",
            templateUrl:"modules/cal/views/history.client.view.html"
        };
    })
    .directive('keyCheck', ["$document",
	function($document) {
        return {
            controller:"CalController",
            link:function($scope){

                $document.on("keydown",function(e){

                    var keyEvent = e;

                    // BackSpace Key
                    if(keyEvent.keyCode == 220){
                        $scope.erase();
                    }
                    // " +,-,*,/ " Key
                    if(keyEvent.keyCode === 187 && keyEvent.shiftKey || keyEvent.keyCode === 107){
                        $scope.inputToCal('+');
                    }

                    else if(keyEvent.keyCode === 189 || keyEvent.keyCode === 109){
                        $scope.inputToCal('-');
                    }

                    else if(keyEvent.keyCode === 56 && keyEvent.shiftKey || keyEvent.keyCode === 106){
                        $scope.inputToCal('*');
                    }

                    else if(keyEvent.keyCode === 111){
                        $scope.inputToCal('/');
                    }

                    // "=" Key
                    else if(keyEvent.keyCode === 187){
                        $scope.calculate();
                    }

                    // KeyBoard Number Key
                    else if(keyEvent.keyCode >= 48 && keyEvent.keyCode <=57){
                        for(var i = 48 ; i < 58 ; i++){

                            var realNum = i-48;
                            if(keyEvent.keyCode == i){
                                $scope.inputToCal(realNum);
                            }
                        }
                    }

                    // KeyPad Number Key
                    else if(keyEvent.keyCode >= 96 && keyEvent.keyCode <=105){
                        for(var i = 96 ; i < 106 ; i++){

                            var realNum = i-96;
                            if(keyEvent.keyCode == i){
                                $scope.inputToCal(realNum);
                            }
                        }
                    }

                    $scope.$digest();

                });
            }
        };
	}
]);
