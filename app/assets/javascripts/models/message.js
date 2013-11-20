GM.Models.Message = Backbone.Model.extend({
    url: '/api/v1/messages',

    parse: function(response) {
        if (response.message) {
            delete(response.message.id);
            _.extend(response, response.message);
            delete(response.message);
        }
        return response;
    },
});
