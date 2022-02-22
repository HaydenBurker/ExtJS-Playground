Ext.application({
    name: 'Fiddle',
    requires: [
        'Fiddle.view.main.Main'
    ],
    launch: function () {
        Ext.create('Fiddle.view.main.Main', {

        });
    }
});
