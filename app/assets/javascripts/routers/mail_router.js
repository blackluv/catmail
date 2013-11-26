GM.Routers.Mail = Backbone.Router.extend({
    routes: {
        '': 'inbox',
        'messages/:id': 'show',
        'messages/:id/reply': 'reply',
        'compose': 'composeNew'
    },

    initialize: function (options) {
        this.$content = $(options.rootEl);
        this.$sidebar = $(options.sidebarEl);
        debugger

        this.installSidebar();
    },

    installSidebar: function() {
        var view = new GM.Views.Sidebar();
        this.$sidebar.html(view.render().$el);
        this._sidebar = view;
    },

    _activate: function(view) {
        this._sidebar.activate(view);
    },

    _swap: function(newView) {
        this._currentView && this._currentView.remove();
        this._currentView = newView;
        this.$content.html(newView.render().$el);
    },

    inbox: function () {
        var inbox = GM.Store.inbox;
        inbox.fetch();
        var view = new GM.Views.Inbox({ collection: inbox });
        this._swap(view);
        this._activate('inbox');
    },

    show: function(id) {
        var message = GM.Store.inbox.get(id);
        var view = new GM.Views.MessageShow({ model: message });
        this._swap(view);
    },

    reply: function(id) {
        var message = GM.Store.inbox.get(id);
        var replyMessage = new GM.Models.Message({
            to_emails: message.escape('sender_email'),
            subject: 'RE:' + message.escape('subject')
        });
        var view = new GM.Views.MessageCompose({ model: replyMessage });
        this._swap(view);
    },

    composeNew: function() {
        var message = new GM.Models.Message();
        var view = new GM.Views.MessageCompose({ model: message });
        this._swap(view);
        this._activate('compose');
    }
});
