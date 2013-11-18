GM.Views.Inbox = Backbone.View.extend({
    template: JST['inbox/index'],

    tagName: 'div',
    className: 'inbox',
    id: 'inbox',

    render: function () {
        this.$el.html(this.template({collection: this.collection}));
        return this;
    }
});
