
var app = angular.module('Agenda', []);

app.controller('ContactCtrl', ['$scope','$http', function($scope, $http) {
	$scope.contacts = [];
	$scope.tx = {};

	$scope.save = function() {
		if (!$scope.contact) {
			return;
		}
		console.log('saving');
		$http.post('contact/save', $scope.contact).success(function(data) {
			
		});
	};

	$scope.delete = function(contactId) {
		console.log('deleting '+contactId);
		$http.post('contact/delete', {id:contactId}).success(function(data) {
		});
	};
	
	$http.get('contact/get').success(function(data) {
		$scope.order = '-name';
		$scope.contacts = data;
	});
}]);


