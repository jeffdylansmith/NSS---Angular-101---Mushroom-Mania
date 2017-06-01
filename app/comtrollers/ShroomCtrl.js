"use strict";
console.log("ShroomCtrl");
app.controller("ShroomCtrl", function($scope, ShroomFactory){
	let thoseShrooms = [];
	ShroomFactory.getShrooms()
	.then(function(itemCollection){
		for (let prop in itemCollection){
			thoseShrooms.push(itemCollection[prop]);
		}
        $scope.shrooms = thoseShrooms;
        console.log("shrooms", $scope.shrooms);
     });
});