GM.Collections.Conversation = Backbone.Collection.extend({
    url: function () {
        return '/api/v1/messages/' + this.message_id + '/conversation';
    },
    model: GM.Models.Message,

    initialize: function (models, options) {
        this.message_id = options.message.id;
    }
});
