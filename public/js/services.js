'use strict';

/* Services */


appRoot.factory('GlobalNoticesService', function(){

    var globalNotice = {

                alert_manual: false,
                alert_manual_on: false,
                alert_until: "10/2/2013",
                notice_title: "Special Notice",
                notice_text_markup: "<strong>To my CS575 Online Section</strong>– I want to start off by apologizing for some of \
                                    the logistical issues this week. Many are my fault due to not having taught a \
                                    hybrid in-class and online course before at Drexel. I am working with the department \
                                    to get access to the blackboard system ASAP, which I think will go a long way to \
                                    getting us back on track. Moving forward I will continue to use my webpage as the \
                                    main venue for communicating to both sections. I have worked hard so that the \
                                    online and in-class sections can be run the same way. Both sections will use \
                                    the same course materials, have the same course deliverables, and have access \
                                    to the recorded course videos. The main difference that the online section will \
                                    get to compensate for the lack of the in-class experience is that I post some \
                                    discussion topics and address Q&A on the blackboard forums. The TA and \
                                    I will monitor this. Thanks again for your understanding as we get these \
                                    logistical challenges addressed… Brian"
    };


    return{
        areNoticesOn: function(){

            if(globalNotice.alert_manual == true)
                return globalNotice.alert_manual_on;

            var jsonDate = Date(globalNotice.alert_until);
            return Date.create(globalNotice.alert_until).isFuture();
        },
        getNoticeTitle: function(){
            return globalNotice.notice_title;
        },
        getNoticeText:function(){
            return globalNotice.notice_text_markup;
        },
        getNoticeUntilText: function(){
            if(globalNotice.alert_manual == true)
                return "This notice will be posted until manually taken down by the instructor"
            else
                return "This notice will automatically end on " + globalNotice.alert_until;
        }
    }

});


appRoot.factory('ResearchPaperWebService', function($resource){

    //simulates reading from a REST API

    //return $resource('http://localhost:3000/publications', {}, {
    //    query: {method:'GET', isArray:false}
    //});

   return{
       getAllPubs : function(){
           return $resource('http://localhost:3000/publications', {}, {
               query: {method:'GET', isArray:false}
           });
       },
       getPubById : function(idValue){
           return $resource('http://localhost:3000/publications/'+idValue, {}, {
               query: {method:'GET', isArray:false}
           });
       }
   };
});