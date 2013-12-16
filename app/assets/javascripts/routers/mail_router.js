GM.Routers.Mail = Backbone.Router.extend({
    routes: {
        '': 'inboxShow',
        'messages/:id': 'messageShow',
        'messages/:id/reply': 'messageReply',
        'compose': 'messageNew'
    },

    initialize: function (options) {
        this.$content = $(options.rootSel);
        this.$sidebar = $(options.sidebarSel);

        this.installSidebar();
    },

    inboxShow: function () {
        var inbox = GM.Store.inbox;
        inbox.fetch();
        var view = new GM.Views.Inbox({ collection: inbox });
        this._swap(view);
        this._activate('inbox');
    },

    messageShow: function(id) {
        var message = GM.Models.Message.findOrCreate({ id: id });
        message.fetch();
        var view = new GM.Views.MessageShow({ model: message });
        this._swap(view);
    },

    messageReply: function(id) {
        var message = GM.Models.Message.findOrCreate(id);
        message.fetch({ success: renderReply.bind(this) });

        function renderReply() {
            var replyMessage = new GM.Models.Message({
                to_emails: message.get('sender_email'),
                subject: 'RE:' + message.get('subject')
            });
            var view = new GM.Views.MessageCompose({ model: replyMessage });
            this._swap(view);
        };
    },

    messageNew: function() {
        var message = new GM.Models.Message();
        var view = new GM.Views.MessageCompose({ model: message });
        this._swap(view);
        this._activate('compose');
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
});
