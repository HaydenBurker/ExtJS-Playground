Ext.define('DataGrid.view.main.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gridController',

    onClick: function(view, index, item, record) {
        //console.log(record);
    	//console.log('onClick called');
    	let html = [];
    	// 	keys = Object.keys(record.data),
    	// 	values = Object.values(record.data);
    	// for (let i in keys) {
     //        if (typeof values[i] == 'object') {
     //            html.push(`${keys[i]}: ${(Array.isArray(values[i])) ? `[` : `{` }`);
     //            this.printObject(1, values[i], html);
     //            html.push(`${(Array.isArray(values[i])) ? `]` : `}` }`);
     //            //console.log(`Found ${(Array.isArray(values[i]) ? `Array` : `Object`)}`);
     //        }
     //        else {
     //            html.push(`${keys[i]}: ${values[i]}`);
     //            //console.log(`Found ${typeof values[i]}`);
     //        }
     //    }
     // console.log(this.view.up('#DataGrid').getController());
        html.push('{');
        this.view.up('#DataGrid').getController().printObject(1, record.data, html);
        html.push('}');
    	view.up('#DataGrid').down('#DataGrid-GridInfo').setHtml(html.join('<br>'));
    },

    // printArray: function(values) {
    //     let arrayHtml = [];
    //     for (let i in values) {
    //         arrayHtml.push(values[i]);
    //     }
    //     return `[${arrayHtml.join(', ')}]`;
    // },

    // printObject: function(tabnum, object, html) {
    //     let objectKeys = Object.keys(object);
    //     let objectValues = Object.values(object);

    //     for (let i in objectKeys) {
    //         //console.log(`Level ${tabnum} object ${i}`);
    //         if (typeof objectValues[i] == 'object'){

    //             html.push(`${this.printTabs(tabnum)}${(Array.isArray(object)) ? `` : `"${objectKeys[i]}": `}${(Array.isArray(objectValues[i]) ? `[` : `{`)}`);
    //             this.printObject(tabnum + 1, objectValues[i], html);
    //             html.push(`${this.printTabs(tabnum)}${(Array.isArray(objectValues[i]) ? `]` : `}`)}${this.printComma(i, objectKeys.length)}`);
    //         }
    //         else{
    //             html.push(`${this.printTabs(tabnum)}${(Array.isArray(object)) ? `` : `"${objectKeys[i]}": `}"${objectValues[i]}"${this.printComma(i, objectKeys.length)}`);
    //         }
    //     }
    // },

    // printTabs: function(tabnum) {
    //     let str = '';
    //     for (let i = 0; i < tabnum; i++)
    //         str = `${str}&nbsp;&nbsp;&nbsp;&nbsp;`
    //     return str;
    // },

    // printComma: function(index, length) {
    //     return (this.isLast(index, length) ? `` : `,`);
    // },

    // isLast: function(index, length) {
    //     return (index == length - 1);
    // }
});