app.controller('ExperienceCalculator',['$scope',function($scope){

    $scope.startDate = new Date('13-Sept-2010');

    $scope.calculateExperience = function(startDate){
        var today = new Date();
        var totalNoOfMonths = (today.getMonth() + today.getFullYear()*12) - (startDate.getMonth()+12*startDate.getFullYear());
        var noOfYears = Math.floor(totalNoOfMonths/12);
        var noOfMonths = totalNoOfMonths - (noOfYears*12);
        $scope.experience = noOfYears+" years "+noOfMonths+" months";
    }

    $scope.calculateExperience($scope.startDate);

}]);