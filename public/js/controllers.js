'use strict';

/* Controllers */

// Parent Contoller - All controllers inherit from this one
function MainAppCtrl($scope, $location, GlobalNoticesService) {

    //console.log('Main App Controller Created')

    //Manage the active navigation class
    $scope.navMgr = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

    $scope.isOnNavPath = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        var rst = (page === currentRoute.substring(0, page.length) ? true : false);
        return rst;
    };

    $scope.shouldShowAlert = function () {
        return GlobalNoticesService.areNoticesOn();
    };

    $scope.getNoticeTitle = function () {
        return GlobalNoticesService.getNoticeTitle();
    };

    $scope.getNoticeText = function () {
        return GlobalNoticesService.getNoticeText();
    };

    $scope.getNoticeUntilText = function () {
        return GlobalNoticesService.getNoticeUntilText();
    };
}


function MainPageCtrl($scope, $location) {
    $scope.isHomeActive = "active";
    $scope.isResearchActive = "";
    $scope.phones = 'foo';
    $scope.orderProp = 'age';

    //console.log('Main Page Controller Created')

    $scope.getPaperList = function () {
        return paperList;
    };

    $scope.navMgrClass = function (page) {
        navClass(page, $location)
    };
}


function PersonalCtrl($scope, $routeParams, $location) {
    //console.log('Personal Controller')

}


function DemoCtrl($scope, $routeParams, $location, ResearchPaperWebService) {

    $scope.searchResults = null;
    $scope.errorObject = null;
    $scope.paperId = 1;
    $scope.isError = false;


    $scope.getAllPubs = function () {
        ResearchPaperWebService.getAllPubs().get(function (results) {
            $scope.searchResults = results;
        }, function (err) {
            $scope.searchResults = err.data;
        });
    };


    $scope.getAPub = function (idVal) {
        ResearchPaperWebService.getPubById(idVal).get(function (results) {
            $scope.searchResults = results;
        }, function (err) {
            $scope.searchResults = err.data;
        });
    };

    $scope.clearPubResults = function () {
        $scope.searchResults = null;
    };


    $scope.getResultSize = function () {
        return $scope.searchResults ? $scope.searchResults.results.length : 0;
    };

    $scope.getResultList = function () {
        return $scope.searchResults ? $scope.searchResults.results : [];
    };

    $scope.isErrorObject = function () {
        if ($scope.searchResults != null) {
            if($scope.searchResults.metadata.error){
                $scope.errorObject = $scope.searchResults;
                return true;
            }else {
                $scope.errorObject = null;
                return false;
            }
        }
        else {
            $scope.errorObject = null;
            return false;
        }
    };

}