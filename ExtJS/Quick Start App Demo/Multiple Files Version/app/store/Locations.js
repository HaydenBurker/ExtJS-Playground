Ext.define('Fiddle.store.Locations', {
    extend: 'Ext.data.Store',
    alias: 'store.locations',
    
    proxy: {
        type: 'ajax',
        url: 'data/locations.json',
        reader: 'json'
    }
});