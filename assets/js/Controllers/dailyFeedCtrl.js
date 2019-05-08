app.controller("dailyFeedCtrl", function($scope,$rootScope, $routeParams ,dailyFeedFactory){
    $rootScope.isLoader=true;
    $scope.category = "All";
        var countryId = $routeParams.countryId;
        //Default view of page
		dailyFeedFactory.view(countryId)
		.then(function(response) {
			if(response.data.status === "ok") {
                $scope.articles= response.data.articles;
                $rootScope.isLoader=false;
			}
			else{
				alert("Error occured from Server Side");
			}
		})
		.catch(function() {
            alert("Connection failure");
        });
        
        // onClick of categorize function
        $scope.categorize = function(category){
            $scope.category = category.toUpperCase();
            if($scope.category==""){
                $scope.category="All";
            }
            $rootScope.isLoader=true;
            
            //View on choosing category
            dailyFeedFactory.catView(countryId, category)
            .then(function(response) {
                if(response.data.status === "ok") {
                    $scope.articles= response.data.articles;
                    $rootScope.isLoader=false;
                }
                else{
                    alert("Error occured from Server Side");
                }
            })
            .catch(function() {
                alert("Connection failure");
            });
        }
	
});