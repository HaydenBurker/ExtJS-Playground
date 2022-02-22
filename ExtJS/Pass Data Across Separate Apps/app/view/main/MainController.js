Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.modifyApp',
    

    onModify: function(button) {
        let anotherApp = Ext.getCmp('anotherApp');
        let myApp = button.up('#myApp');
        //this.view.setHtml('hi'); // Direct method without itemId (only works if the button is in the same container as the html tag)
        //console.log(view);
        anotherApp.setHtml('New text!');
        myApp.htmlContent[myApp.htmlContent.length] = 'This app modifies \'Another App\'.'
        myApp.htmlContent[myApp.htmlContent.length] = 'However, the app is required to have a unique id.'
        myApp.htmlContent[myApp.htmlContent.length] = 'itemId can be used for modifying a'
        myApp.htmlContent[myApp.htmlContent.length] = 'component in the same application.'
        myApp.htmlContent[myApp.htmlContent.length] = 'For example, the \'Modify \'Another App\'\''
        myApp.htmlContent[myApp.htmlContent.length] = 'button modified the html tag in this app.'
        myApp.setHtml(myApp.htmlContent.join('<br>'));
    }
});