Ext.application({
    name: 'TreeApp',
    requires: [
        'TreeApp.view.main.Main'
    ],
    launch: function () {
        Ext.create('TreeApp.view.main.Main', {

        });
    }
});
