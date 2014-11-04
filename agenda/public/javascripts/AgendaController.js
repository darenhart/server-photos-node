
var app = angular.module('Agenda', []);

app.controller('AgendaCtrl', ['$scope','$http', function($scope, $http) {
		$scope.user = '';
		$scope.logged_in = true;
	}])

	.controller('ContactCtrl', ['$scope','$http', function($scope, $http) {
		$scope.contacts = [];

		$scope.save = function() {
			if (!$scope.contact) {
				return;
			}
			$http.post('contact/save', $scope.contact).success(function(data) {
				console.log(data);
				if (data.status) {
					$scope.tx.messageSaveLink = "Link adicionado";
					$scope.contact.id = data.return;
					if ($scope.link.tags) {
						var tags = $scope.link.tags.split(',');
						var uniq_tags = {};
						for(k in tags) {
							uniq_tags[tags[k]]=tags[k]; 
						}
						$scope.link.tags = uniq_tags;
					}
					$scope.contacts.push($scope.link);
					$scope.link = null;
				} else {
					$scope.tx.messageSaveLink = data.return ? data.return : 'Erro ao adicionar contact.';	
				}
			});
		};

		$scope.delete = function(contactId) {
			$http.post('contact/delete', {id:contactId}).success(function(data) {
				if (data.status == 1) {
					for (key in $scope.contacts) {
						if ($scope.contacts[key].id == contactId) {
							$scope.contacts.splice(key,1);
						}
					}
				} else {
					$scope.tx.messageFavs = data.return ? data.return : 'Erro ao excluir contact.';	
				}
			});
		};
		/*
		$http.get('php/link_get.php').success(function(data) {
			if (data.status == 1) {
				$scope.order = '-id';
				$scope.contacts = data.return ? data.return : [];
			} else {
				$scope.tx.messageFavs = data.return;
			}
		});
		*/
	}])


