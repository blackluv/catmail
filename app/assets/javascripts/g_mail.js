window.GM = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Store: {},

    initialize: function() {
        var inbox = GM.Store.inbox = new GM.Collections.Inbox();
        inbox.fetch({
            success: function() {
                new GM.Routers.Mail({rootEl: '#content', sidebarEl: '#sidebar'});
                Backbone.history.start();
            },
        });
    }
};

$(document).ready(function(){
    GM.initialize();
});
