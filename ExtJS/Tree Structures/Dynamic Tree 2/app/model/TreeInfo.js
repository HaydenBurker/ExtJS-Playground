Ext.define('TreeApp.model.TreeInfo', {
    extend: 'Ext.panel.Panel',
    xtype: 'treeInfo',

    title: 'Tree Info',
    itemId: 'TreeApp-TreeInfo',
    //width: 300,
    //height: 250,
    border: false,
    frame: true,
    items: [{
        xtype: 'panel',
        border: false,
        margin: '0 10 10 0',
        html: 'Selected node information:'
    },

    // {
    //     xtype: 'textfield',
    //     fieldLabel: 'Node Name'
    // },  {
    //     xtype: 'textfield',
    //     fieldLabel: 'Depth'
    // }
    {
        xtype: 'panel',
        border: false,
        html: ''
    }],
    nodeName: '',
    depth: 0,
    children: 0
});