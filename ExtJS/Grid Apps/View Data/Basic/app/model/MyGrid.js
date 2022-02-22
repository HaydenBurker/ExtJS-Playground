Ext.define('DataGrid.model.MyGrid', {
	extend: 'Ext.grid.Panel',
	requires: ['DataGrid.store.GridData', 'DataGrid.view.main.GridController'],
	controller: 'gridController',
	xtype: 'myGrid',
	itemId: 'DataGrid-MyGrid',
	title: 'My Grid',
	store: {
		type: 'gridData',
		autoLoad: true
	},
	listeners: {
		cellclick: 'onClick'
	},
	columns: [{
		header: 'Id',
		dataIndex: 'id',
		flex: 1
	},	{
		header: 'Name',
		dataIndex: 'name',
		flex: 1
	}, {
		header: 'Description',
		dataIndex: 'desc',
		flex: 2
	}],
	dockedItems: [{
		xtype: 'button',
		text: 'Reload',
		handler: function() {
			this.up('#DataGrid-MyGrid').getStore().load();
		}
	}]
})