Ext.define('DataGrid.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: ['DataGrid.model.MyGrid', 'DataGrid.model.GridInfo'],

    title: 'My App',
    itemId: 'DataGrid',
    width: 1000,
    height: 800,
    frame: true,
    bodyPadding: 10,
    defaults: {
    	border: false,
    	frame: true,
    	margin: 10,
    	height: 600
    },
    layout: {
    	type: 'table',
    	columns: 2
    },

    //html: '<h2>Welcome to my template app!</h2><p>Use this template to start constructing a scalable app with multiple js files</p>',
    items: [{
    	width: 500,
    	xtype: 'myGrid'
    }, {
    	width: 437,
    	xtype: 'gridInfo'
    }],
    renderTo: Ext.getBody()
});