Ext.define('DataGrid.store.GridData', {
	extend: 'Ext.data.Store',
	alias: 'store.gridData',


    proxy: {
        type: 'ajax',

        url: 'data/data.json',
        reader: {
            rootProperty: 'rates',
            type: 'json'
        }
    }
})