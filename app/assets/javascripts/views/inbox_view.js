GM.Views.Inbox = Backbone.View.extend({
    template: JST['inbox/index'],

    tagName: 'div',
    className: 'inbox',
    id: 'inbox',

    events: {
        "click tr": "show"
    },
    
    show: function(event) {
        var clickedUrl = 'messages/' + $(event.currentTarget).data("id")
        Backbone.history.navigate(clickedUrl, {trigger: true});
    },

    initialize: function () {
        this.listenTo(this.collection, "add", this.render);
    },

    render: function () {
        this.$el.html(this.template({collection: this.collection}));
        return this;
    }
});
