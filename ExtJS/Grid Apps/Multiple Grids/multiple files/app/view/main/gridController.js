Ext.define('PlaygroundApp.view.main.gridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gridController',
    requires: ['PlaygroundApp.view.main.popupForm'],
    
    onPopupForm: function (view, index, item, record) {
        Ext.create({
            xtype: 'popupform',
            bodyPadding: '10',
            width: 400,
            record: record,
            viewModel : {
                data: {
                    gridData: record
                }
            },
            renderTo: Ext.getBody()
        });
    }
});