Ext.define('Fiddle.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpanel',
    controller: 'listview',
    requires: ['Fiddle.store.Employees', 'Fiddle.view.main.ListViewController'],

    items: [{
        title: 'Employee Directory',
        xtype: 'grid',
        id: 'myGrid',
        itemId: 'empDirGrid',
        iconCls: 'x-fa fa-users',
        grouped: true,
        listeners: {
            cellclick: 'onPopupForm'
        },
        store: {
            type: 'employees',
            autoLoad: true,
            grouper: 'officeLocation'
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1,
            summaryType: 'count',
            summaryRenderer: function(value){
                return Ext.String.format('{0} employee{1}', value, value !== 1 ? 's' : '');
            }
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }],
        features: [{
            ftype:'grouping',
            groupHeaderTpl: '{name}',
            showSummaryRow: true
        }]
    },{
        title: 'About Sencha',
        padding: 20,
        iconCls: 'x-fa fa-info-circle',
        html: '<h1>About Sencha</h1><br/>More than 10,000 customers and 60% of the Fortune 100 rely on Sencha solutions to deliver innovative applications that drive their businesses. With a longstanding commitment to web technologies, Sencha dramatically reduces the cost and complexity of developing and delivering enterprise applications across multiple device types.<br/><br/><h2>Create feature-rich HTML5 applications using JavaScript</h2><br/>Sencha Ext JS is the most comprehensive MVC/MVVM JavaScript framework for building feature-rich, cross-platform web applications targeting desktops, tablets, and smartphones. Ext JS leverages HTML5 features on modern browsers while maintaining compatibility and functionality for legacy browsers.<br/><br/>Ext JS features hundreds of high-performance UI widgets that are meticulously designed to fit the needs of the simplest as well as the most complex web applications. Ext JS templates and layout manager give you full control over your display irrespective of devices and screen sizes. An advanced charting package allows you to visualize large quantities of data. The framework includes a robust data package that can consume data from any backend data source. Ext JS also offers several out-of-the-box themes, and complete theming support that lets you build applications that reflect your brand. It also includes an accessibility package (ARIA) to help with Section 508 compliance.'
    }],
    renderTo: Ext.getBody()
});

// Ext.create({
//     xtype: 'tabpanel',
//     controller: 'listview',
//     requires: ['Fiddle.store.Employees'],

//     items: [{
//         title: 'Employee Directory',
//         xtype: 'grid',
//         id: 'myGrid',
//         itemId: 'empDirGrid',
//         iconCls: 'x-fa fa-users',
//         grouped: true,
//         listeners: {
//             cellclick: 'onPopupForm'
//         },
//         store: {
//             type: 'employees',
//             autoLoad: true,
//             grouper: 'officeLocation'
//         },
//         columns: [{
//             text: 'First Name',
//             dataIndex: 'firstName',
//             flex: 1,
//             summaryType: 'count',
//             summaryRenderer: function(value){
//                 return Ext.String.format('{0} employee{1}', value, value !== 1 ? 's' : '');
//             }
//         }, {
//             text: 'Last Name',
//             dataIndex: 'lastName',
//             flex: 1
//         }, {
//             text: 'Phone Number',
//             dataIndex: 'phoneNumber',
//             flex: 1
//         }],
//         features: [{
//             ftype:'grouping',
//             groupHeaderTpl: '{name}',
//             showSummaryRow: true
//         }]
//     },{
//         title: 'About Sencha',
//         padding: 20,
//         iconCls: 'x-fa fa-info-circle',
//         html: '<h1>About Sencha</h1><br/>More than 10,000 customers and 60% of the Fortune 100 rely on Sencha solutions to deliver innovative applications that drive their businesses. With a longstanding commitment to web technologies, Sencha dramatically reduces the cost and complexity of developing and delivering enterprise applications across multiple device types.<br/><br/><h2>Create feature-rich HTML5 applications using JavaScript</h2><br/>Sencha Ext JS is the most comprehensive MVC/MVVM JavaScript framework for building feature-rich, cross-platform web applications targeting desktops, tablets, and smartphones. Ext JS leverages HTML5 features on modern browsers while maintaining compatibility and functionality for legacy browsers.<br/><br/>Ext JS features hundreds of high-performance UI widgets that are meticulously designed to fit the needs of the simplest as well as the most complex web applications. Ext JS templates and layout manager give you full control over your display irrespective of devices and screen sizes. An advanced charting package allows you to visualize large quantities of data. The framework includes a robust data package that can consume data from any backend data source. Ext JS also offers several out-of-the-box themes, and complete theming support that lets you build applications that reflect your brand. It also includes an accessibility package (ARIA) to help with Section 508 compliance.'
//     }],
//     renderTo: Ext.getBody()
// });