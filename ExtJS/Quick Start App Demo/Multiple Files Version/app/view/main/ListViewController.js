Ext.define('Fiddle.view.main.ListViewController', {
    extend: 'Ext.app.ViewController',
    requires: ['Fiddle.model.PopupForm'],
    alias: 'controller.listview',
    
    onPopupForm: function (view, index, item, record) {
        Ext.create({
            xtype: 'popupform',
            bodyPadding: '10',
            width: 400,
            record: record,
            viewModel : {
                data: {
                    employee: record
                }
            },
            renderTo: Ext.getBody()
        });
    }
});