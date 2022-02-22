Ext.define('Fiddle.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',
        
    proxy: {
        type: 'ajax',
        url: 'data/employees.json',
        reader: 'json'
    }
});