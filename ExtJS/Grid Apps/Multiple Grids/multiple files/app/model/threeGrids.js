Ext.define('PlaygroundApp.model.threeGrids', {
    extend: 'Ext.container.Container',
    requires: ['PlaygroundApp.model.dataGrid'],
    xtype: 'threeGrids',
    margin: '0 10 10 0',

    items: [{
        xtype: 'dataGrid'
    }, {
        xtype: 'dataGrid'
    }, {
        xtype: 'dataGrid'
    }]
});