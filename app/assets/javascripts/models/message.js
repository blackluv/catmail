GM.Models.Message = Backbone.Model.extend({
    parse: function(response) {
        delete(response.message.id);
        _.extend(response, response.message);
        delete(response.message);
        return response;
    },
});
