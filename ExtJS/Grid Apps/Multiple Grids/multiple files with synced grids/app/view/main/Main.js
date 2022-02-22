Ext.define('PlaygroundApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: ['PlaygroundApp.store.dataStore', 'PlaygroundApp.model.threeGrids', 'PlaygroundApp.store.dataStore'],
    xtype: 'panel',
    title: 'GridPanel',
    layout: 'hbox',
    width: '100%',
    bodyPadding: 10,
    scrollable: true,
    viewModel: {
        stores: {
            myDataStore: {
                type: 'dataStore'
            }
        }
    },
    defaults: {
        margin: '0 10 10 0'
    },
    items: [{
        xtype: 'threeGrids',
        bind: '{myDataStore}'
    }, {
        xtype: 'threeGrids'
    }, {
        xtype: 'threeGrids'
    }, {
        xtype: 'threeGrids'
    }],

    renderTo: Ext.getBody()
});
