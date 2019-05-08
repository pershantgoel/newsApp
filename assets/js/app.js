const app=angular.module("myApp",["ngRoute"]);

//Routing
app.config(function($routeProvider) {
	$routeProvider
        .when("/", {
            templateUrl: "news_sources.html",
            controller: "homeCtrl"
		})
		.when("/daily-feed/:countryId", {
        	templateUrl: "daily_feed.html",
        	controller: "dailyFeedCtrl"
        })

    .otherwise({ redirectTo: "/" });
});