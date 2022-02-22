Ext.define('TreeApp.model.MyTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'myTree',

    title: 'Object Tree',
    width: 300,
    height: 250,
    border: false,
    frame: true,
    rootVisible: true,
    selModel: {
        allowDeselect: true
    },
    store: {
        type: 'tree',
        root: {
            text: 'Tree Data',
            expanded: true
        },
        proxy: {
            type: 'ajax',
            url: 'data/treeData.json',
            reader: 'json'
        }
    },
    tbar: {
        xtype: 'button',
        text: 'Reload',
        tooltip: 'Click to update tree',
        handler: function() {
            this.up('treepanel').getStore().load();
        }
    }
});