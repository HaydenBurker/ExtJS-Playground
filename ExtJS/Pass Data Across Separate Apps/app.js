Ext.application({
    name: 'MyApp',
    requires: [
        'MyApp.view.main.Main'
    ],
    launch: function () {
        Ext.create('MyApp.view.main.Main', {

        });

        Ext.create({
        	xtype: 'panel',
        	title: 'Another App',
        	width: 600,
        	height: 400,
        	bodyPadding: 10,
        	html: 'Text',
        	id: 'anotherApp',
        	renderTo: Ext.getBody()
        })
    }
});
