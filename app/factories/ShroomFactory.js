"use strict";

app.factory('ShroomFactory', function($q, $http){
	let getShrooms = () => {
		let items = []; 
		return $q((resolve, reject) => {
			$http({
		        method : "GET",
		        url : "https://mushrooms-ba42e.firebaseio.com/mushrooms.json"
    		})
			.then((itemObject) => {
				console.log("Shrooms loaded", itemObject);
				let itemCollection = itemObject.data;
				console.log("itemCollection", itemCollection);
				resolve(itemCollection);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getShrooms};

});