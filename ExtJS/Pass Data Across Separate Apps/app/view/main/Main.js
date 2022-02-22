Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.main.MainController'],
    controller: 'modifyApp',

    title: 'My App',
    itemId: 'myApp',
    frame: true,
    width: 600,
    height: 400,
    bodyPadding: 10,
    html: '',
    htmlContent: [],
    buttons: [{
    	text: 'Modify \'Another App\'',
    	handler: 'onModify'
    }],

    renderTo: Ext.getBody()
});