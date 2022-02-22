Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'panel',

    title: 'My App',
    frame: true,
    width: 600,
    height: 400,
    bodyPadding: 10,
    html: '<h2>Welcome to my template app!</h2><p>Use this template to start constructing a scalable app with multiple js files</p>',

    renderTo: Ext.getBody()
});