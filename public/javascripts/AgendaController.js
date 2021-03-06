'use strict'

var app = angular.module('Agenda', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/contacts', {
			templateUrl: 'contact-list',
			controller: 'ContactCtrl'
		}).
		when('/about', {
			templateUrl: 'about',
			controller: 'AboutCtrl'
		}).
		otherwise({
	      redirectTo: '/contacts'
    	})
	;
}]);

app.controller('ContactCtrl', ['$scope','$http', function($scope, $http) {
	$scope.contacts = [];
	$scope.tx = {};

	$scope.save = function() {
		if (!$scope.contact) {
			return;
		}
		$http.post('api/contact/', $scope.contact).success(function(data) {
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
		$http.delete('api/contact/' + contact._id).success(function(data) {
			if (data._id) {
				$scope.contacts = $scope.contacts.filter(function(el) { return el._id!=contact._id;});
			}
		});
	};

	$scope.update = function(contact) {
		if (contact.updating) {
			contact.updating = false;
			var contact_update = {_id:contact._id,name:contact.name,phone:contact.phone};
			$http.put('api/contact/' + contact._id, contact_update).success(function(data) {
				$scope.tx.messageContacts = '';
				if (data.errmsg) {
					$scope.tx.messageContacts = data.errmsg;
				}
			});
		} else {
			contact.updating = true;	
		}
	};
	
	$http.get('api/contact/').success(function(data) {
		$scope.order = '-_id';
		$scope.contacts = data;
	});
}]);

app.controller('AboutCtrl', ['$scope', function($scope) {
	$scope.message = 'App de teste';
}]);





