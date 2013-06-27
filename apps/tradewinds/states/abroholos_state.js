sc_require('states/abroholos_internal_state');

Tradewinds.AbroholosState = SC.State.extend({

  _abroholosView: null,
  _abroholosController: null,

  initialSubstate: 'ready',

  enterState: function() {
    // load data?
    var key = Tradewinds.store.loadRecord(Tradewinds.Abroholos, SC.copy({
      count: 5,
      name: 'Dora'
    }));

    // create mediating controllers
    this.set('_abroholosController',
      SC.ObjectController.create({
        content: Tradewinds.store.materializeRecord(key)
      })
    );

    // TODO: create view controllers

    // create view
    this._abroholosView = Tradewinds.AbroholosPane.create({
      defaultResponder: this.get('statechart')//,
    });

    this._abroholosView.get('countView').bind('value', this._abroholosController, 'count');

    // append view
    this._abroholosView.append();
  },

  exitState: function() {
    var data,
      controller = this.get('_abroholosController');
    // remove view
    this._abroholosView.remove();

    // destroy view
    this._abroholosView.destroy();
    this._abroholosView = null;

    // TODO: destroy view controllers

    data = controller.get('content');

    // destroy mediating controllers
    this._abroholosController.set('content', null);
    controller.destroy();
    this.set('_abroholosController', null);

    // unload data
    Tradewinds.store.unloadRecord(Tradewinds.Abroholos, data.get('id'));
  },

  backPressed: function() {
    this.gotoState('landing');
  },

  toInternal: function() {
    this.gotoState('internal');
  },

  ready: SC.State.extend({}),

  // This state demonstrates how to have data that is owned by one state used by a child state while
  // avoiding tight coupling.
  internal: SC.State.plugin('Tradewinds.AbroholosInternalState', {
    superControllerBinding: SC.Binding.oneWay('.parentState._abroholosController')
  })

});