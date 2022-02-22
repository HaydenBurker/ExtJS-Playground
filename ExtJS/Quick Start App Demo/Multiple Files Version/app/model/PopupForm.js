Ext.define('Fiddle.model.PopupForm', {
    extend: 'Ext.form.Panel',
    requires: ['Fiddle.view.main.PopupFormController', 'Fiddle.store.Locations'],
    xtype: 'popupform',
    controller: 'popupform',

    title: 'Update Record',

    width: 300,
    floating: true,
    centered: true,
    modal: true,
    
    items: [{
        border: false,
        // Displays html code
    }, {
        xtype: 'textfield',
        name: 'firstname',
        fieldLabel: 'First Name',
        bind: '{employee.firstName}'
    }, {
        xtype: 'textfield',
        name: 'lastname',
        fieldLabel: 'Last Name',
        bind: '{employee.lastName}'
    }, {
        xtype: 'textfield',
        name: 'phonenumber',
        fieldLabel: 'Phone Number',
        bind: '{employee.phoneNumber}'
    }, {
        xtype: 'combobox',
        name: 'office',
        fieldLabel: 'Office Location',
        bind: '{employee.officeLocation}',
        store: {
            type: 'locations',
            autoLoad: true
        },
        queryMode: 'local',
        displayField: 'text',
        valueField: 'text'
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
    listeners: {
        afterrender: function() {
            let employee = this.record.data;
            this.items.items[0].setHtml('<h2>Old Data</h2><p>First Name: "' + employee.firstName + '"</p><p>Last Name: "' + employee.lastName + '"</p><p>Phone Number: "' + employee.phoneNumber + '"</p><p>Office Location: "' + employee.officeLocation + '"</p><h2>New Data</h2>');
        }
    }
});