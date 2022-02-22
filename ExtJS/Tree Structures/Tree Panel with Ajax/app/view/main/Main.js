Ext.define('TreeApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: ['TreeApp.model.MyTree'],
    title: 'panel',
    width: 600,
    height: 400,
    border: false,
    layout: 'center',
    items: [{
        xtype: 'myTree'
    }],
    renderTo: Ext.getBody()
});