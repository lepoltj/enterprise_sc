Tradewinds.LandingState = SC.State.extend({

  _landingView: null,

  enterState: function() {
    // TODO: create mediating controllers
    // TODO: create view controllers

    // create view
    this._landingView = Tradewinds.LandingPane.create({
      defaultResponder: this.get('statechart')
    });

    // append view
    this._landingView.append();
  },

  exitState: function() {
    // remove view
    this._landingView.remove();

    // destroy view
    this._landingView.destroy();
    this._landingView = null;

    // TODO: destroy view controllers
    // TODO: destroy mediating controllers
  },

  abroholosPressed: function() {
    this.gotoState('abroholos');
  },

  borascoPressed: function() {
    this.gotoState('borasco');
  }

});