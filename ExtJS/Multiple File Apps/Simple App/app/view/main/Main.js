Ext.define('Fiddle.view.main.Main', {
    extend: 'Ext.window.Window',
    xtype: 'main',

    title: 'Simple App',
    frame: true,
    autoShow: true,
    width: '90%',
    height: 420,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    // Create a session for this view
    session: true,

    items: [{
        xtype: 'panel',
        title: 'Simple Panel',
        width: 600,
        height: '100%',
        buttons: [{
        	text: 'Click Me!',
        	handler: function() {
        		Ext.Msg.alert('Button Clicked', 'You\'ve clicked the \'Click Me!\' button!');
        	}
        }]
    }]
});