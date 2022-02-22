Ext.define('PlaygroundApp.view.main.popupFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupform',
    
    cancelUpdate: function () {
        var view = this.getView(),
            record = view.record;
        view.destroy();
        record.reject();
    },
    
    submitUpdate: function(me) {
        var view = this.getView(),
            record = view.record;
        view.destroy();
        record.commit();
        //this.up('grid').updateViewModel(view, this.up('grid').getView());
    }
});