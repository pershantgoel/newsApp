app.factory("dailyFeedFactory", function($http, $q) {
	return {
		view : function(countryId) {
			var deferred = $q.defer();
			$http({
				"method" : "GET",
				"url" : "https://newsapi.org/v2/top-headlines?country="+ countryId +"&apiKey=ba97c3d4768f403c824674e9be23df42"
			})
			.then(function(resolveObj) {
				deferred.resolve(resolveObj)
			})
			.catch(function(rejectObj) {
				deferred.reject(rejectObj)
			})
			return deferred.promise;
        },
        catView : function(countryId, category) {
			var deferred = $q.defer();
			$http({
				"method" : "GET",
				"url" : "https://newsapi.org/v2/top-headlines?country="+ countryId + "&category="+ category +"&apiKey=ba97c3d4768f403c824674e9be23df42"
			})
			.then(function(resolveObj) {
				deferred.resolve(resolveObj)
			})
			.catch(function(rejectObj) {
				deferred.reject(rejectObj)
			})
			return deferred.promise;
		}
	}
});