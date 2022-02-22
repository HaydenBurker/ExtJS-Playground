Ext.application({
    name: 'MyApp',
    requires: [
        'MyApp.view.main.Main'
    ],
    launch: function () {
        Ext.create('MyApp.view.main.Main', {

        });
    }
});
