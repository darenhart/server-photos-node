
var app = angular.module('Agenda', []);

app.controller('AgendaCtrl', ['$scope','$http', function($scope, $http) {
		$scope.tx = {
			title:'Agenda',
		};
		
		$scope.user = '';
		$scope.logged_in = true;

	}])

	.controller('ContactCtrl', ['$scope','$http', function($scope, $http) {
		$scope.tx = {
			submit:'Add'
		};

		$scope.favLinks = [];

		$scope.save = function() {
			if (!$scope.link) {
				$scope.tx.message = "Informe os dados";
				return;
			}
			$http.post('php/link_save.php', $scope.link).success(function(data) {
				if (data.status == 1) {
					$scope.tx.messageSaveLink = "Link adicionado";
					$scope.link.id = data.return;
					if ($scope.link.tags) {
						var tags = $scope.link.tags.split(',');
						var uniq_tags = {};
						for(k in tags) {
							uniq_tags[tags[k]]=tags[k]; 
						}
						$scope.link.tags = uniq_tags;
					}
					$scope.favLinks.push($scope.link);
					$scope.link = null;
				} else {
					$scope.tx.messageSaveLink = data.return ? data.return : 'Erro ao adicionar contact.';	
				}
			});
		};

		$scope.delete = function(contactId) {
			$http.post('php/link_delete.php', {id:contactId}).success(function(data) {
				if (data.status == 1) {
					for (key in $scope.favLinks) {
						if ($scope.favLinks[key].id == contactId) {
							$scope.favLinks.splice(key,1);
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
				$scope.favLinks = data.return ? data.return : [];
			} else {
				$scope.tx.messageFavs = data.return;
			}
		});
		*/
	}])


