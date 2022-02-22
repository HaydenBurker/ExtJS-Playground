Ext.define('PlaygroundApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: ['PlaygroundApp.store.dataStore', 'PlaygroundApp.model.threeGrids'],
    xtype: 'panel',
    title: 'GridPanel',
    layout: 'hbox',
    width: '100%',
    bodyPadding: 10,
    scrollable: true,

    defaults: {
        margin: '0 10 10 0'
    },
    items: [{
        xtype: 'threeGrids'
    }, {
        xtype: 'threeGrids'
    }, {
        xtype: 'threeGrids'
    }, {
        xtype: 'threeGrids'
    }],
    dockedItems: [{
        xtype: 'button',
        text: 'Reload All',
        docked: 'top',
        tooltip: '<p>WARNING: Reloads ALL grids.</p><p>Saved changes will be removed!</p>',

        handler: function() {
            let panel = this.up('panel');
            for (let iter = 0; iter < 1; iter++) {
                for (let i = 0; i < panel.items.length; i++) {
                    for (let j = 0; j < panel.items.items[i].items.length; j++){
                        this.up('panel').items.items[i].items.items[j].store.load();
                    }
                }
            }
        }
    }],

    renderTo: Ext.getBody()
});
