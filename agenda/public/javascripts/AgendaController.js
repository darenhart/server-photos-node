
var app = angular.module('Agenda', []);

app.controller('ContactCtrl', ['$scope','$http', function($scope, $http) {
	$scope.contacts = [];
	$scope.tx = {};

	$scope.save = function() {
		if (!$scope.contact) {
			return;
		}
		$http.post('contact/save', $scope.contact).success(function(data) {
			$scope.tx.messageSaveContact = '';
			if (data._id) {
				$scope.contacts.push(data);	
				$scope.contact = '';
			} else if (data.message) {
				$scope.tx.messageSaveContact = data.message;
			}
		});
	};

	$scope.remove = function(contact) {
		$http.post('contact/remove', contact).success(function(data) {
			if (data._id) {
				$scope.contacts = $scope.contacts.filter(function(el) { return el._id!=contact._id;})	
			}
		});
	};

	$scope.update = function(contact) {
		if (contact.updating) {
			contact.updating = false;
			var contact_update = {_id:contact._id,name:contact.name,phone:contact.phone};
			$http.post('contact/update', contact_update).success(function(data) {
				$scope.tx.messageContacts = '';
				if (data.errmsg) {
					$scope.tx.messageContacts = data.errmsg;
				}
			});
		} else {
			contact.updating = true;	
		}
	};
	
	$http.get('contact/get').success(function(data) {
		$scope.order = '-_id';
		$scope.contacts = data;
	});
}]);


