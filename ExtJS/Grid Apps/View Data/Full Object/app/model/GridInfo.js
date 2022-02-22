Ext.define('DataGrid.model.GridInfo', {
    extend: 'Ext.panel.Panel',
    xtype: 'gridInfo',
    title: 'Grid Info',
    itemId: 'DataGrid-GridInfo',
    bodyPadding: 10,
    scrollable: true,
    bbar: [{
        xtype: 'textfield',
        itemId: 'GridInfo-dataIndex',
        fieldLabel: 'Test',
        value: 0
    }, {
        xtype: 'button',
    	text: "Get Data",
    	handler: function() {
            let mainC = this.up('#DataGrid').getController();
            let html = [];
            //console.log(this.up('#DataGrid').down('#DataGrid-MyGrid').getStore().data.items[0].data);
            //let selection = this.up('#DataGrid').down('#DataGrid-MyGrid').getSelection();

            let index = parseInt(this.up('#DataGrid-GridInfo').down('#GridInfo-dataIndex').getValue());
            let length = this.up('#DataGrid').down('#DataGrid-MyGrid').getStore().data.items.length
            html.push('{');
            if (mainC.validIndex(index, length)){
                let object = this.up('#DataGrid').down('#DataGrid-MyGrid').getStore().data.items[index].data;
    		    mainC.printObject(1, object, html);
            }
            html.push('}');

            this.up('#DataGrid-GridInfo').setHtml(html.join('<br>'));
    	}
    }, {
        xtype: 'button',
        text: 'Modify Grid',
        handler: function() {
            let store = this.up('#DataGrid').down('#DataGrid-MyGrid').getStore()
            let object = store.data.items;
            object[0].data.name = 'New Name';
            store.fireEvent('refresh', object[0]);
        }
    }, {
        xtype: 'button',
        text: 'Modify Store',
        handler: function() {
            let store = this.up('#DataGrid').down('#DataGrid-MyGrid').getStore()
            let newProxy = {
                type: 'ajax',

                url: 'data/oldData.json',
                reader: {
                    rootProperty: 'rates',
                    type: 'json'
                }
            };
            store.setProxy(newProxy);
            this.up('#DataGrid').down('#DataGrid-MyGrid').setTitle('Old Store');
            store.load();
        }
    }]
});