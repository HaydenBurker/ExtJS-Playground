console.log('Popup Controller!');

Ext.define('Fiddle.view.main.PopupFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupform',
    
    cancelUpdate: function () {
        var view = this.getView(),
            record = view.record;
        view.destroy();
        record.reject();
        //console.log(Ext.getCmp('myGrid'));
    },
    
    submitUpdate: function(me) {
        var view = this.getView(),
            record = view.record;
        view.destroy();
        record.commit();
    }
});