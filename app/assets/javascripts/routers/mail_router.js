GM.Routers.Mail = Backbone.Router.extend({
    routes: {
        '': 'inbox'
    },

    inbox: function () {
        console.log('hello world');
        var inbox = new GM.Collections.Inbox();
        inbox.fetch({success: function() {
            var view = new GM.Views.Inbox({ collection: inbox });
            $('#content').append(view.render().$el);
        }});

    }
});
