Ext.application({
    name: 'PlaygroundApp',
    requires: [
        'PlaygroundApp.*'
    ],
    launch: function () {
        Ext.create('PlaygroundApp.view.main.Main', {
            
        });
    }
});
