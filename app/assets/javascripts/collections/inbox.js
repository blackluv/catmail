GM.Collections.Inbox = Backbone.Collection.extend({
    url: '/api/v1/inbox',
    model: GM.Models.Message,
});

GM.Store.inbox = new GM.Collections.Inbox();
