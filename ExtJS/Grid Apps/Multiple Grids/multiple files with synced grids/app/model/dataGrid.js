Ext.define('PlaygroundApp.model.dataGrid', {
    extend: 'Ext.grid.Panel',
    requires: ['PlaygroundApp.view.main.gridController'],
    //requires: [
    //    'Ext.selection.CellModel'
    //],
    controller: 'gridController',
    xtype: 'dataGrid',
    title: 'Data Grid',
    width: 400,
    height: 213,
    frame: true,
    border: false,
    margin: '0 0 10 0',
    // dockedItems: [{
    //     xtype: 'button',
    //     handler: function () {
    //         this.up('grid').store.load();
    //     },
    //     dock: 'top',
    //     width: 100,
    //     text: 'Reload'
    // }],
    listeners: {
        cellclick: 'onPopupForm'
    },
    columns: [{
        header: 'Id',
        dataIndex: 'id',
        flex: 1,
        editor: {
            allowBlank: false
        }
    }, {
        header: 'Name',
        dataIndex: 'name',
        flex: 2,
        editor: {
            allowBlank: false
        }
    }],
    // afterRender: function() {
    //     Ext.function.defer(function() {
    //         console.log('afterrender');
    //         this.up('grid').getStore.load()}, 100000, this);
    // }
});