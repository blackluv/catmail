GM.Routers.Mail = Backbone.Router.extend({
    routes: {
        '': 'inbox',
        'message/:id': 'show'
    },

    initialize: function (options) {
        this.$rootEl = $(options.rootEl);
    },

    _swap: function(newView) {
        this._currentView && this._currentView.remove();
        this._currentView = newView;
        this.$rootEl.html(newView.render().$el);
    },

    inbox: function () {
        var inbox = GM.Store.inbox;
        inbox.fetch({});
        var view = new GM.Views.Inbox({ collection: inbox });
        this._swap(view);
    },

    show: function(id) {
    },
});
