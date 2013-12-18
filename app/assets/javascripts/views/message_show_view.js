GM.Views.MessageShow = Backbone.View.extend({
    template: JST['message/show'],

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
        this.listenTo(this.model, 'sync', this.render.bind(this));
    },

    render: function () {
        this.$el.html(this.template({ model: this.model });
        return this;
    }
});
