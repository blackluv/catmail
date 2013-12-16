GM.Views.Sidebar = Backbone.View.extend({
    template: JST['sidebar/show'],

    tagName: 'div',
    className: 'sidebar',
    id: 'sidebar-show',

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template({}));
        return this;
    },

    activate: function(view) {
        var linkSelector = "#" + view + "-link";
        this.$el.find('li').removeClass('active');
        this.$el.find(linkSelector).addClass('active');
    }
});
