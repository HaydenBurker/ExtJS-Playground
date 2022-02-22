Ext.define('TreeApp.model.MyTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'myTree',

    title: 'Simple Tree',
    itemId: 'TreeApp-MyTree',
    //width: 365,
    //height: 300,
    border: false,
    frame: true,
    rootVisible: true,
    selModel: {
        allowDeselect: true,
        listeners: {
            selectionchange: function(selModel, selection) {
                
                let info = selModel.view.up('panel').up('panel').down('#TreeApp-TreeInfo');
                if (selection.length > 0) {
                    selData = selection[0].data;
                    info.nodeName = selData.text;
                    info.depth = selData.depth;
                    info.items.items[1].setHtml('Node Name: ' + info.nodeName + '<br>Depth: ' + info.depth);
                }
                else
                    info.items.items[1].setHtml('');
            }
        }
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
    },
    // bbar: [{
    //     xtype: 'textfield',
    //     itemId: 'nodeName',
    //     fieldLabel: 'New Node'
    // }, {
    //     xtype: 'button',
    //     text: 'submit',
    //     handler: function(button) {
    //         let tree = button.up('treepanel');
    //         let target = tree.selModel.getSelection()[0] || tree.getRootNode(),
    //             value = tree.down('#nodeName').getValue(),
    //             store = tree.getStore(),
    //             node;
    //         console.log(store.getRootNode());
    //         if (!value) {
    //             value = 'New Node ' + target.childNodes.length;
    //         }
    //         node = {
    //             text: value
    //         }

    //         node = target.appendChild(node);
    //         //target.data.children[parseInt(target.data.children.length)] = node;
    //         if (!target.isExpanded()) {
    //             target.expand(false);
    //         }
    //         tree.selModel.select(node);
    //         //store.getRootNode().removeChild(store.getRootNode().childNodes[0]);
            
    //     }
    // }, {
    //     xtype: 'button',
    //     text: 'delete',
    //     handler: function(button) {
    //         let tree = button.up('treepanel');
    //         let target = tree.selModel.getSelection()[0];
    //         //let store = button.up('treepanel').getStore();
    //         // if (target == tree.getRootNode()) {
    //         //     ;
    //         // }
    //         target.remove(target);
    //         //target.data.text = 'New Name';
    //         // target.data['leaf'] = false;
    //         // target.updateInfo(true, target);
    //         //target.clear();

    //         //store.load();
    //     }
    // }, {
    //     xtype: 'button',
    //     text: 'Modify',
    //     handler: function(button) {
    //         let tree = button.up('treepanel');
    //         let target = tree.selModel.getSelection()[0];
    //         target.data.text = 'New Name';
    //     }
    // }]
});