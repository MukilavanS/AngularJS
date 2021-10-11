App.controller('testController', function ($scope){
    $scope.find = function (){
        $scope.outString = $scope.inString.split(" ").sort();
        $scope.output = [];
        $scope.ouTpuT = []; 
        for(let i=0; i<$scope.outString.length; i++){
            $scope.output[i] = $scope.outString[i];
            if($scope.outString[i] != $scope.outString[i+1]){
                $scope.ouTpuT[i] = $scope.outString[i]+"="+$scope.counT($scope.inString, $scope.outString[i]);
                //document.write($scope.outString[i]+"="+$scope.counT($scope.inString, $scope.outString[i]));
            }

        }
    }
    $scope.square = function(){
        $scope.sq = $scope.inNumber;
        $scope.squareOut = Math.pow($scope.inNumber, $scope.inNumber);
    }
    $scope.counT = function(str, word){
        str = str.split(" ").sort();
        let count = 0;
        for(let i=0; i<str.length; i++){
            if(word == str[i])
                count++;
        }
        return count;
    }
})