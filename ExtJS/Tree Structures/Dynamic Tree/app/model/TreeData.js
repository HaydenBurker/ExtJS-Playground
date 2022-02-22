Ext.define('TreeApp.model.TreeData', {
    extend: 'Ext.panel.Panel',
    xtype: 'treeData',

    title: 'Tree Data',
    itemId: 'TreeApp-TreeData',
    border: false,
    frame: true,
    scrollable: true,

    items: [{
        xtype: 'panel',
        border: false,
        margin: '0 10 10 0',
        html: 'Selected node json data:'
    },
    {
        xtype: 'panel',
        itemId: 'jsonInHtml',
        border: false,
        html: '',
        htmlContent: [],
        nodeDepth: 2
    }],
    bbar: [{
        xtype: 'checkbox',
        itemId: 'partitioned',
        boxLabel: 'Partitioned',
        autoEl: {
            tag: 'div',
            'data-qtip': 'Removes brackets<br>Used to add segments of data'
        }
    }, {
        xtype: 'checkbox',
        itemId: 'includeRoot',
        boxLabel: 'Include Root',
        autoEl: {
            tag: 'div',
            'data-qtip': 'Displays the root with all its children'
        }
    }, {
        xtype: 'button',
        text: 'Generate Data',
        handler: function() {
            let panel = this.up('#TreeApp-TreeData'),
                tree = this.up('#TreeApp').down('#TreeApp-MyTree'),
                htmlPanel = panel.down('#jsonInHtml'),
                includeRoot = panel.down('#includeRoot').getValue(),
                partitioned = panel.down('#partitioned').getValue(),
                node = tree.selModel.getSelection()[0] || tree.getRootNode();
            htmlPanel.nodeDepth = node.data.depth;
            panel.reset(panel.down('#jsonInHtml'));
            //panel.down('#jsonInHtml').htmlContent = ['Hello ', 'world!'];
            //if (this.up('#TreeApp').down('#TreeApp-TreeInfo').descendants > 1000)
            if (!partitioned)
                panel.newLine('[', htmlPanel);
            if (includeRoot)
                panel.generateJsonNode(htmlPanel, node)
            else {
                htmlPanel.nodeDepth += 1;
                panel.generateJsonChildren(htmlPanel, node);
            }
            if (!partitioned)
                panel.newLine(']', htmlPanel);

            htmlPanel.update(htmlPanel.htmlContent.join('<br>'));
            //this.up('#TreeApp-TreeData').down('#jsonInHtml').items.items[0].setHtml('[' + this.up('#TreeApp-TreeData').generateJson(root) + ']');
        }
    }],
    generateJsonNode: function(panel, node) {
        let mpanel = panel.up('#TreeApp-TreeData');
        let tabs = (node.data.depth - panel.nodeDepth) * 2;
        mpanel.newLine(`${mpanel.tab(tabs + 1)}{`, panel);
        mpanel.newLine(mpanel.tab(tabs + 2) + `"text": "${node.data.text}",`, panel);

        if (!node.isLeaf()){
            mpanel.newLine(`${mpanel.tab(tabs + 2)}"expanded": ${node.isExpanded()},`, panel);
            
            mpanel.newLine(`${mpanel.tab(tabs + 2)}"children": [`, panel);
            mpanel.generateJsonChildren(panel, node);
            mpanel.newLine(`${mpanel.tab(tabs + 2)}]`, panel);
        }
        else
            mpanel.newLine(`${mpanel.tab(tabs + 2)}"leaf": true`, panel);


        mpanel.newLine(`${mpanel.tab(tabs + 1)}}`, panel);
    },

    generateJsonChildren: function(panel, node) {
        let mpanel = panel.up('#TreeApp-TreeData');
        if (!node.isLeaf() && node.childNodes.length > 0){
            for (let i = 0; i < node.childNodes.length - 1; i++){
                mpanel.generateJsonNode(panel, node.childNodes[i]);
                panel.htmlContent[panel.htmlContent.length - 1] += ',';
            }

            mpanel.generateJsonNode(panel, node.childNodes[node.childNodes.length - 1]);
        }
    },

    tab: function(num) {
        let str = '';
        for (let i = 0; i < num; i++)
            str = `${str}&nbsp;&nbsp;&nbsp;&nbsp;`
        return str;
    },

    newLine: function(data, panel) {
        panel.htmlContent[panel.htmlContent.length] = data;
    },

    reset: function(panel){
        panel.htmlContent = [];
    }
});