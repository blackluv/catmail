GM.Views.ConversationShow = Backbone.View.extend({
    template: JST['conversation/show'],

    tagName: 'div',
    className: 'message',
    id: 'message-show',

    events: {
        "click #inbox-button": "goToInbox"
    },

    goToInbox: function () {
        Backbone.history.navigate('', {trigger: true});
    },

    initialize: function () {
        this.listenTo(this.collection, 'sync', this.render.bind(this));
    },

    render: function () {
        this.collection.each(function (message) {
            var childView = new GM.Views.MessageShow({ model: this.model });
            this.$el.append(childView.render())
        });
        return this;
    }
});
