var profile = angular.module('profile', [])
.controller('ProfileController', ['$scope', '$http', function($scope, $http){

	$scope.master = {};

	$http({
		method: 'GET',
		url: 'api/loginInfo',
		data: {},
	}).success(function(data){
		var name = data.displayName.split(' ');
		$scope.firstname = name[0];
		$scope.lastname = name[1];
	})

	$scope.onSave = function(user){
		$scope.master = angular.copy(user);
		var userSaveData = $scope.user;
		console.log(userSaveData);
		$http({
			method: 'GET',
			url: 'api/loginInfo',
			data: {},
		}).success(function(profileData){
			console.log(profileData.id);
			$http({
				method: 'PUT',
				url: '/api/saveInfo/' + profileData.id,
				data: userSaveData
			}).success(function(data){
				console.log('youve saved');
				console.log(data);
			})
		})
	};
}]);