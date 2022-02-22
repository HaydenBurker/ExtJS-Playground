Ext.define('PlaygroundApp.model.dataGrid', {
    extend: 'Ext.grid.Panel',
    requires: ['PlaygroundApp.view.main.gridController'],
    controller: 'gridController',
    xtype: 'dataGrid',
    title: 'Data Grid',
    width: 400,
    height: 240,
    frame: true,
    border: false,
    margin: '0 0 10 0',
    store: {
        type: 'dataStore',
        autoLoad: false
    },
    listeners: {
        cellclick: 'onPopupForm'
    },
    dockedItems: [{
        xtype: 'button',
        handler: function () {
            this.up('grid').store.load();
        },
        dock: 'top',
        width: 100,
        text: 'Reload'
    }],
    columns: [{
        header: 'Id',
        dataIndex: 'id',
        flex: 1
    }, {
        header: 'Name',
        dataIndex: 'name',
        flex: 2
    }]
});