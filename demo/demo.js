var StorageDemo = angular.module('StorageDemo', ['browserStorage']);

StorageDemo.controller("demo1", function($scope, browserStorage) {

	$scope.saveInput1 = function() {
		browserStorage.local.save("input1", $scope.input1);
	};

	$scope.loadInput1 = function() {
		$scope.loadedValue = browserStorage.local.load("input1");
	};

});