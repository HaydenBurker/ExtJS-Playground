Ext.define('DataGrid.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainController',

    printObject: function(tabnum, object, html) {
        let objectKeys = Object.keys(object);
        let objectValues = Object.values(object);

        for (let i in objectKeys) {
            //console.log(`Level ${tabnum} object ${i}`);
            if (typeof objectValues[i] == 'object'){

                html.push(`${this.printTabs(tabnum)}${(Array.isArray(object)) ? `` : `"${objectKeys[i]}": `}${(Array.isArray(objectValues[i]) ? `[` : `{`)}`);
                this.printObject(tabnum + 1, objectValues[i], html);
                html.push(`${this.printTabs(tabnum)}${(Array.isArray(objectValues[i]) ? `]` : `}`)}${this.printComma(i, objectKeys.length)}`);
            }
            else{
                html.push(`${this.printTabs(tabnum)}${(Array.isArray(object)) ? `` : `"${objectKeys[i]}": `}"${objectValues[i]}"${this.printComma(i, objectKeys.length)}`);
            }
        }
    },

    printTabs: function(tabnum) {
        let str = '';
        for (let i = 0; i < tabnum; i++)
            str = `${str}&nbsp;&nbsp;&nbsp;&nbsp;`
        return str;
    },

    printComma: function(index, length) {
        return (this.isLast(index, length) ? `` : `,`);
    },

    isLast: function(index, length) {
        return (index == length - 1);
    },



    validIndex: function(index, length) {
        return index < length && index >= 0 && Number.isInteger(index)
    }
});