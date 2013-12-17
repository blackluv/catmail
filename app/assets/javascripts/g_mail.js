window.GM = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Store: {},
    Helpers: {},

    initialize: function() {
        // They're going to want the inbox.
        $(".loading-area__bar__fill").addClass('filling');

        GM.Store.inbox.fetch({
            success: function() {
                // Fake slower load time to show off load bar... Sorry.
                window.setTimeout(function () {
                    $(".loading-area__bar__fill").removeClass('filling').addClass('done');
                    $('#load').fadeOut(300);
                }, 1000);
        }});
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
