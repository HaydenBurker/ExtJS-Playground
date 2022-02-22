Ext.define('PlaygroundApp.view.main.popupForm', {
    extend: 'Ext.form.Panel',
    requires: 'PlaygroundApp.view.main.popupFormController',
    xtype: 'popupform',
    controller: 'popupform',

    title: 'Update Record',

    width: 300,
    floating: true,
    centered: true,
    modal: true,
    
    items: [{
        xtype: 'textfield',
        name: 'identity',
        fieldLabel: 'Id',
        bind: '{gridData.id}'
    }, {
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        bind: '{gridData.name}'
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        border: false,
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }],
    // listeners: {
    //     afterrender: function() {
    //         let gridData = this.record.data;
    //         //this.items.items[0].setHtml('<h2>Old Data</h2><p>First Name: "' + gridData.firstName + '"</p><p>Last Name: "' + gridData.lastName + '"</p><p>Phone Number: "' + gridData.phoneNumber + '"</p><p>Office Location: "' + gridData.officeLocation + '"</p><h2>New Data</h2>');
    //     }
    // }
});