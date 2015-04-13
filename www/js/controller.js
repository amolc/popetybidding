angular.module('startup.controllers', [])
  .controller('myController', function($scope,$http,$state,$stateParams) {
  	console.log("in controller");
  	$http.get(baseURL + 'listoverview').success(function(res) {
		//$scope.artwork = res;
		console.log(res);
		$scope.company_list = res;
		console.log('in home___________');
		if (res.status == 'false') {
			alert(res.message);
		} else {
		$scope.artwork=res;
		}

	}).error(function() {
		alert("Please check your internet connection or data source..");
	});

	$scope.companyDetails = function(companyid) {
		$scope.cidobj = {
			cid:companyid};
		console.log($scope.cidobj);
		$state.go('details',{'cid':companyid});
		
		
		

	};
  	/*$scope.showdetails=function(){
      
   //   $state.go('app.search_list_details');
      $scope.uploadUrl = 'www/templates/';
	$scope.artwork= { };

	
    }*/
  	
  })
.controller('companydetailController', function($scope,$http,$state,$stateParams) {
	console.log("in details controller");
	
	var id = {
		cid : $stateParams.cid
	};
	console.log(id);
	$http.post(baseURL + 'companyInfo',id).success(function(res) {	
			console.log("In companyInfo 0000000000");		
		$scope.companyDetails = res[0];
		console.log($scope.companyDetails);
		

	}).error(function() {
		alert("Please check your internet connection or data source..");
	});

});