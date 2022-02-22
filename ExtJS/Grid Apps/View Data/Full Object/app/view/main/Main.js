Ext.define('DataGrid.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: ['DataGrid.model.MyGrid', 'DataGrid.model.GridInfo', 'DataGrid.view.main.MainController'],
    controller: 'mainController',

    title: 'My App',
    itemId: 'DataGrid',
    width: 1300,
    height: 800,
    frame: true,
    bodyPadding: 10,
    defaults: {
        defaults: {
        	border: false,
        	frame: true,
        	margin: 10,
        	height: 600
        },
        layout: {
        	type: 'table',
        	columns: 2
        }
    },

    //html: '<h2>Welcome to my template app!</h2><p>Use this template to start constructing a scalable app with multiple js files</p>',
    items: [{
        xtype: 'container',
        items: [{
        	width: 600,
        	xtype: 'myGrid'
        }, {
        	width: 637,
        	xtype: 'gridInfo'
        }]
    }],
    renderTo: Ext.getBody()
});