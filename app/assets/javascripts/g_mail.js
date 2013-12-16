window.GM = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Store: {},
    Helpers: {},

    initialize: function() {
        // They're going to want the inbox.
        GM.Store.inbox.fetch();
        new GM.Routers.Mail({
            rootSel: '#content',
            sidebarSel: '#sidebar'
        });
        Backbone.history.start();
    }
};

$(document).ready(function(){
    GM.initialize();
});
