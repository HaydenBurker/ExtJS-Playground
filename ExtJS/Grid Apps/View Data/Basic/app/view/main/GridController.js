Ext.define('DataGrid.view.main.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gridController',

    onClick: function(view, index, item, record) {
    	console.log('onClick called');
    	let html = [],
    		keys = Object.keys(record.data),
    		values = Object.values(record.data);
    	for (let i in keys)
    		html.push(`${keys[i]}: ${values[i]}`);
    	view.up('#DataGrid').down('#DataGrid-GridInfo').setHtml(html.join('<br>'));
    }

});