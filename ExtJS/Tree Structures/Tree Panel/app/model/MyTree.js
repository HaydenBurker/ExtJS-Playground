Ext.define('TreeApp.model.MyTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'myTree',

    title: 'Simple Tree',
    width: 300,
    height: 250,
    border: false,
    frame: true,
    rootVisible: true,
    store: {
        type: 'tree',
        root: {
            text: 'Root',
            expanded: true,
            children: [
                {
                    text: 'Child 1',
                    leaf: true
                },
                {
                    text: 'Child 2',
                    leaf: true
                },
                {
                    text: 'Child 3',
                    expanded: true,
                    children: [
                        {
                            text: 'Grandchild 1',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'Child 4',
                    leaf: true
                },
                {
                    text: 'Child 5',
                    expanded: false,
                    children: [
                        {
                            text: 'Grandchild 1',
                            expanded: false,
                            children: [
                                {
                                    text: 'Grandgrandchild 1',
                                    leaf: true
                                },
                                {
                                    text: 'Grandgrandchild 2',
                                    leaf: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
});