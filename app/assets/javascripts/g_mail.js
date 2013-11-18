window.GM = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
        new GM.Routers.mail({});
        Backbone.history.start();

    }
};

$(document).ready(function(){
    GM.initialize();
});
