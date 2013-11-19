GM.Routers.Mail = Backbone.Router.extend({
    routes: {
        '': 'inbox',
        'messages/:id': 'show'
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
        var message = GM.Store.inbox.get(id);
        var view = new GM.Views.MessageShow({ model: message });
        this._swap(view);
    },

    composeNew: function() {
        var message = new GM.Models.Message();

    },
});
