// ==========================================================================
// Project:   Tradewinds.LandingPane
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Tradewinds */

/** @class The view you see when you land on the application
  @extends SC.MainPane
*/
Tradewinds.LandingPane = SC.MainPane.extend(
/** @scope Tradewinds.LandingPane.prototype */ {
    childViews: ['abroholosButton', 'borascoButton'],

    abroholosButton: SC.ImageView.extend({
      layout: { centerX: 0, centerY: 0, height: 150, width: 150 },
      scale: SC.BEST_FIT,
      value: sc_static('resources/images/abroholos.jpg')
    }),

    borascoButton: SC.ImageView.extend({
      layout: { centerX: 0, centerY: 0, height: 150, width: 150 },
      scale: SC.BEST_FIT,
      value: sc_static('resources/images/borasco.jpg')
    })
});
