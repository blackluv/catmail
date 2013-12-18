GM.Models.Message = Backbone.RelationalModel.extend({
    urlRoot: '/api/v1/messages',
    conversation: function () {
        if (!("_conversation" in this)) {
            this._conversation = new GM.Collections.Conversation([this], {
                message_id: this.id,
            });
        };
        return this._conversation;
    }
});
