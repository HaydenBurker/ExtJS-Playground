Ext.define('TreeApp.model.TreeControl', {
    extend: 'Ext.panel.Panel',
    xtype: 'treeControl',

    title: 'Control Tree',
    itemId: 'TreeApp-TreeControl',
    //width: 300,
    //height: 250,
    border: false,
    frame: true,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Node Name'
    }, {
        xtype: 'combobox',
        fieldLabel: 'type',
        store: {
            data:[{
                "type": "Folder"
            }, {
                "type": "File"
            }]
        },
        displayField: 'type',
        valueField: 'type',
        value: 'File'
    }],
    buttons: [{
        text: 'Add',
        handler: function() {
            let tree = this.up('#TreeApp').down('#TreeApp-MyTree'),
                store = tree.getStore(),
                node = tree.selModel.getSelection()[0] || tree.getRootNode(),
                value = this.up('#TreeApp-TreeControl').items.items[0].getValue(),
                type = this.up('#TreeApp-TreeControl').items.items[1].getValue(),
                child;
            if (node.isLeaf()){
                Ext.Msg.alert('File Selected', 'Can\'t add a ' + type + ' to a File');
                return;
            }

            if (!value) {
                value = 'New Node ' + node.childNodes.length;
            }

            child = {
                text: value,
                leaf: false
            }

            if (type == 'File')
                child.leaf = true;
            else if (type == 'Folder')
                ;
            else {
                Ext.Msg.alert('Invalid Type', 'Choose \'File\' or \'Folder\'');
                return;
            }

            child = node.appendChild(child);

            if (!node.isExpanded())
                node.expand(false);
            tree.selModel.select(child);
            
        }
    }, {
        text: 'Modify',
        handler: function() {
            let tree = this.up('#TreeApp').down('#TreeApp-MyTree');
            let node = tree.selModel.getSelection()[0] || tree.getRootNode();
            let value = this.up('#TreeApp-TreeControl').items.items[0].getValue();
            if (!value) {
                value = 'New Node ' + (node.isRoot() ? 0 : node.parentNode.indexOf(node));
            }
            node.data.text = value;
            tree.getStore().fireEvent('refresh', node);
        }
    }, {
        text: 'Remove',
        handler: function() {
            let tree = this.up('#TreeApp').down('#TreeApp-MyTree');
            let node = tree.selModel.getSelection()[0] || tree.getRootNode();
            if (node.isRoot()){
                Ext.Msg.alert('Invalid Node', 'Can\'t delete the root!');
                return;
            }
            tree.selModel.select(node.parentNode);
            node.remove(node);
        }
    }]
});