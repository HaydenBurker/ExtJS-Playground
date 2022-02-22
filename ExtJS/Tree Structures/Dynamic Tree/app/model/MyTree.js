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
                
                let info = selModel.view.up('#TreeApp').down('#TreeApp-TreeInfo');
                let selData = selection[0];
                if (selection.length > 0) {
                    info.nodeName = selData.data.text;
                    info.depth = selData.data.depth;
                    info.children = selData.childNodes.length;
                    info.descendants = this.view.up('#TreeApp-MyTree').descendants(selData);
                    info.siblings = (selData.isRoot()) ? 0 : selData.parentNode.childNodes.length - 1;
                    info.items.items[1].setHtml(`Node Name: ${info.nodeName}<br>Depth: ${info.depth}<br>${(info.children > 0) ? `Children: ${info.children}` : `No Children`}<br>${(info.children > 0) ? `Descendants: ${info.descendants}`: `No Descendants`}<br>${(info.siblings > 0) ? `Siblings: ${info.siblings}` : `No Siblings`}`);
                }
                else{
                    info.items.items[1].setHtml('');
                    info.descendants = this.view.up('#TreeApp-MyTree').descendants(this.view.up('#TreeApp-MyTree').getStore().getRootNode());
                }
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

    descendants: function(node, num = 0) {
        if (!node.isLeaf() && node.childNodes.length > 0) {
            num += node.childNodes.length;
            for (let i in node.childNodes) {
                num = this.view.up('#TreeApp-MyTree').descendants(node.childNodes[i], num);
            }
        }

        return num;
    }
});