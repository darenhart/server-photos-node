
var app = angular.module('Agenda', []);

app.controller('ContactCtrl', ['$scope','$http', function($scope, $http) {
	$scope.contacts = [];
	$scope.tx = {};

	$scope.save = function() {
		console.log('saving');
		if (!$scope.contact) {
			return;
		}
		$http.post('contact/save', $scope.contact).success(function(data) {
		});
	};

	$scope.delete = function(contactId) {
		console.log('deleting');
		$http.post('contact/delete', {id:contactId}).success(function(data) {
		});
	};
	
	$scope.tx.messageContacts = "asdasd";
	$http.get('contact/get').success(function(data) {
		$scope.order = '-name';
		$scope.contacts = data;
	});
}]);


