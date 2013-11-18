window.GM = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
        new GM.Routers.Mail({});
        Backbone.history.start();

    }
};

$(document).ready(function(){
    GM.initialize();
});
