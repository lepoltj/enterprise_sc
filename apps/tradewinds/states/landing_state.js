Tradewinds.LandingState = SC.State.extend({

  _landingView: null,

  enterState: function() {
    // TODO: create mediating controllers
    // TODO: create view controllers
    // create view
    this._landingView = Tradewinds.LandingPane.create({});
    // append view
    this._landingView.append();
  },

  exitState: function() {
    // TODO: remove view
    this._landingView.remove();
    // TODO: destroy view
    this._landingView.destroy();
    this._landingView = null;
    // TODO: destroy view controllers
    // TODO: destroy mediating controllers
  }

});