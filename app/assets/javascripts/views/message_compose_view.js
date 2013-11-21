GM.Views.MessageCompose = Backbone.View.extend({
    template: JST['message/compose'],

    tagName: 'div',
    className: 'compose',
    id: 'message-compose',

    events: {
        "submit #message-compose-form": "submit",
        "click #send-button": "submit"
    },

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },

    render: function () {
        this.$el.html(this.template({model: this.model}));
        return this;
    },

    submit: function(event) {
        event.preventDefault();
        this.model.set({
            to_emails: this.$el.find('#to_emails').val(),
            subject: this.$el.find('#subject').val(),
            body: this.$el.find('#body').val()
        });

        this.model.save();
    }
});
