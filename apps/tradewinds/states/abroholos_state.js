Tradewinds.AbroholosState = SC.State.extend({

  _abroholosView: null,
  _abroholosController: null,

  enterState: function() {
    // load data?
    var key = Tradewinds.store.loadRecord(Tradewinds.Abroholos, SC.copy({
      count: 5,
      name: 'Dora'
    }));

    // create mediating controllers
    this._abroholosController = SC.ObjectController.create({
      content: Tradewinds.store.materializeRecord(key)
    });

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
    var data;
    // remove view
    this._abroholosView.remove();

    // destroy view
    this._abroholosView.destroy();
    this._abroholosView = null;

    // TODO: destroy view controllers

    data = this._abroholosController.get('content');

    // destroy mediating controllers
    this._abroholosController.set('content', null);
    this._abroholosController.destroy();
    this._abroholosController = null;

    // unload data
    Tradewinds.store.unloadRecord(Tradewinds.Abroholos, data.get('id'));
  },

  backPressed: function() {
    this.gotoState('landing');
  }

});