'use strict';

/* Controllers */




// Parent Contoller - All controllers inherit from this one
function MainAppCtrl($scope, $location, GlobalNoticesService)
{

    //console.log('Main App Controller Created')

    //Manage the active navigation class
    $scope.navMgr = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

    $scope.isOnNavPath = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        var rst = (page === currentRoute.substring(0,page.length) ? true : false);
        return rst;
    };

    $scope.shouldShowAlert = function()
    {
        return GlobalNoticesService.areNoticesOn();
    };

    $scope.getNoticeTitle = function()
    {
        return GlobalNoticesService.getNoticeTitle();
    };

    $scope.getNoticeText = function()
    {
        return GlobalNoticesService.getNoticeText();
    };

    $scope.getNoticeUntilText = function()
    {
        return GlobalNoticesService.getNoticeUntilText();
    };
}


function MainPageCtrl($scope, $location) {
  $scope.isHomeActive = "active";
  $scope.isResearchActive="";
  $scope.phones = 'foo';
  $scope.orderProp = 'age';

    //console.log('Main Page Controller Created')

  $scope.getPaperList = function(){
        return paperList;
  };

  $scope.navMgrClass = function(page)
  {
    navClass(page,$location)
  };
}




function PersonalCtrl($scope, $routeParams, $location) {
    //console.log('Personal Controller')

}


function DemoCtrl($scope, $routeParams, $location, ResearchPaperWebService) {


  $scope.searchResults = {};
  $scope.paperId = 1;
  $scope.isError = false;


  $scope.getAllPubs = function(){
    var myPubsList = ResearchPaperWebService.getAllPubs().query(
          {}, //args
          function(data){
              //additional success processing here
          },
          function(error)
          {
              //error handling here
          }
      );
      $scope.searchResults = myPubsList;
  };


    $scope.getAPub = function(idVal){
        console.log("here")
        var myPubsList = ResearchPaperWebService.getPubById(idVal).query(
            {}, //args
            function(data){
                //additional success processing here
            },
            function(error)
            {
                //error handling here
            }
        );

        var results = [];
        results.push(myPubsList);

        $scope.searchResults = results;
    };

    $scope.clearPubResults = function(){
        $scope.searchResults = {};
    }

    $scope.getResultSize = function(){
        return Object.keys($scope.searchResults).length;
    }

    $scope.getResultList = function(){
        var resultList = [];
        if($scope.getResultSize() > 0)
            resultList = Object.values($scope.searchResults)

        return resultList;
    }

    $scope.isErrorObject = function( result){
        if(result["error"] != null)
            return true;
        else
            return false;
    }

}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
