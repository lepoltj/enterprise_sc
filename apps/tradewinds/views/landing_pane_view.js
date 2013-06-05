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
    childViews: ['abroholosButton', 'abroholosLabel', 'borascoButton', 'borascoLabel'],

    abroholosButton: SC.ImageButtonView.extend({
      layout: { centerX: -155, centerY: 0, height: 150, width: 150 },
      //scale: SC.FILL_PROPORTIONALLY,
      image: 'abroholos-button'
    }),

    abroholosLabel: SC.LabelView.extend({
      layout: { centerX: -155, centerY: 100, height: 24, width: 150 },
      value: 'Abroholos'
    }),

    borascoButton: SC.ImageButtonView.extend({
      layout: { centerX: 155, centerY: 0, height: 150, width: 150 },
      //scale: SC.FILL_PROPORTIONALLY,
      image: 'borasco-button'
    }),

    borascoLabel: SC.LabelView.extend({
      layout: { centerX: 155, centerY: 100, height: 24, width: 150 },
      value: 'Borasco'
    })
});
