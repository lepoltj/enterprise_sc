sc_require('states/abroholos_internal_state');

Tradewinds.AbroholosState = SC.State.extend({

  // Properties preceeded by '_' are internal to this object; in an object oriented environment they
  // would be "private."
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
    // Notice that I'm using "set" here. That is because I'm going to bind to _abroholosController
    // later on in a substate.
    this.set('_abroholosController',
      SC.ObjectController.create({
        content: Tradewinds.store.materializeRecord(key)
      })
    );

    // TODO: create view controllers

    // create view
    // Here I'm not using set. Because I will not be binding to _abroholosView it is not necessary.
    // However, it may be desirable to enforce uniform access and require that all properties be
    // accessed via get/set.
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
  // Here I'm binding to a controller owned by the parent state. Be aware of the context: within the
  // "plugin" call, .parentState refers to the instance Tradewinds.AbroholosState.
  // In my opinion, this does not violate the internal visibility of _abroholosController because
  // this instance of Tradewinds.AbroholosInternalState (named internal) is itself internal to
  // Tradewinds.AbroholosState
  internal: SC.State.plugin('Tradewinds.AbroholosInternalState', {
    superControllerBinding: SC.Binding.oneWay('.parentState._abroholosController')
  })

});