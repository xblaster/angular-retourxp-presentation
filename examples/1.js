function ExampleCtrl($scope) {
console.log("toto");
	$scope.mans = [
		{"nom":"Wax","prenom":"Jerome"},
		{"nom":"Paquelier","prenom":"Michael"},
		{"nom":"Martin","prenom":"Brice"},
	]
	
	/* partie 2 */
	
	$scope.isValid = function(param) {
		if (param == undefined) {
			return false;
		}
		if (param.length <=1) {
			return false;
		}
		
		return true;
	}
	
	
}