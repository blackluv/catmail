GM.Routers.Mail = Backbone.Router.extend({
    routes: {
        '': 'inbox'
    },

    inbox: function () {
        console.log('hello world')
    }
})
