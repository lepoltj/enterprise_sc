// ==========================================================================
// Project:   Tradewinds
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Tradewinds */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Tradewinds = SC.Application.create(SC.StatechartManager,
  /** @scope Tradewinds.prototype */ {

  NAMESPACE: 'Tradewinds',
  VERSION: '0.1.0',

  autoInitStatechart: false,

  trace: true,

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),

  rootState: SC.State.extend({
    initialSubstate: 'landing',

    landing: SC.State.plugin('Tradewinds.LandingState'),
    abroholos: SC.State.plugin('Tradewinds.AbroholosState'),
    borasco: SC.State.extend(),

    abroholsPressed: function() {
      this.gotoState('abroholos');
    },

    borascoPressed: function() {
      this.gotoState('borasco');
    },

    landingPressed: function() {
      this.gotoState('landing');
    }
  })


}) ;
