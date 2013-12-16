window.GM = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Store: {},

    initialize: function() {
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
