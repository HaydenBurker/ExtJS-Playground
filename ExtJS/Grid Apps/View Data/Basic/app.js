Ext.application({
    name: 'DataGrid',
    requires: [
        'DataGrid.view.main.Main'
    ],
    launch: function () {
        Ext.create('DataGrid.view.main.Main', {

        });
    }
});
