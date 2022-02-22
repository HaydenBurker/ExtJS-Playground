Ext.define('PlaygroundApp.store.dataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dataStore',
    autoLoad:true,
    proxy: {
        type: 'ajax',

        url: 'data/data.json',
        reader: {
            rootProperty: 'rates',
            type: 'json'
        }
    }
});