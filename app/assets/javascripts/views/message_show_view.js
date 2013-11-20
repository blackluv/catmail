GM.Views.MessageShow = Backbone.View.extend({
    template: JST['message/show'],

    tagName: 'div',
    className: 'message',
    id: 'message-show',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template({ model: this.model }));
        return this;
    }
});
