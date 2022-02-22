Ext.application({
    name: 'TreeApp',
    requires: [
        'TreeApp.view.main.Main'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
        	//requires: ['TreeApp.view.main.Main'],
        	scrollable: true,
        	items: [{
        		xtype: 'treeApp'
        	}]
        });
    }
});
