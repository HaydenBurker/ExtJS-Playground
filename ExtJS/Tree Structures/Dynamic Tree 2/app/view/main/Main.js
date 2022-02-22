Ext.define('TreeApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'treeApp',
    requires: ['TreeApp.model.MyTree', 'TreeApp.model.TreeControl', 'TreeApp.model.TreeInfo', 'TreeApp.model.TreeData'],
    title: 'Tree App',
    itemId: 'TreeApp',
    //width: '100%',
    border: false,
    scrollable: true,
    layout:{
         type: 'center',
         align: 'stretch',
         pack: 'start'
    },
    forceFit: true,
    items: [{
        xtype: 'container',
        defaults: {
            layout: {
                type: 'table',
                columns: 2,
                // tableAttrs: {
                //     style: {
                //         width: '100%'
                //     }
                // }
            },
            defaults:{
                margin: 10,
                bodyPadding: 10,
                colspan: 1,
                height: 400
            }
        },
        items: [{
            xtype: 'container',
            items: [{
                xtype: 'myTree',
                width: 610
            }, {
                xtype: 'treeControl',
                width: 450
            }]
        }, {
            xtype: 'container',
            items: [{
                xtype: 'treeInfo',
                width: 500
            }, {
                xtype: 'treeData',
                width: 560
            }]
        }]
    }],
    renderTo: Ext.getBody()
});