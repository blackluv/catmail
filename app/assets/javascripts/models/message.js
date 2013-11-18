GM.Models.Message = Backbone.Model.extend({
    parse: function(response) {
        _.extend(response, response.message);
        delete(response.message);
        return response;
    }
});
