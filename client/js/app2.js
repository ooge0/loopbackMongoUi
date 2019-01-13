// THIS IS  -- STAF --

var myAppStaff = angular.module("myStaffs", ['lbServices']);
myAppStaff.controller("myItemsControllerStaff" , function ($scope, $http,  Staff){
    $scope.staffs = Staff.find();
    $scope.newStaff='';
    $scope.pushStaff = function () {
        if ($scope.newStaff != ""){
            Staff.create ({first_name:$scope.newStaff}).$promise.then(function(first_name){
            $scope.staffs.push(first_name);
            $scope.newStaff = '';
            })
        }
    }
$scope.deleteStaff = function(index) {
    Staff.deleteById ({id: $scope.staffs[index].id}).$promise.then(function(){
        $scope.staffs.splice(index, 1);
    })
}    
});
