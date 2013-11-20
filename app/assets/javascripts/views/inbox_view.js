GM.Views.Inbox = Backbone.View.extend({
    template: JST['inbox/index'],

    tagName: 'div',
    className: 'inbox',
    id: 'inbox',

    initialize: function () {
        this.listenTo(this.collection, "add", this.render);
    },

    render: function () {
        this.$el.html(this.template({collection: this.collection}));
        return this;
    }
});
