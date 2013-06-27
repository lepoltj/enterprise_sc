// ==========================================================================
// Project:   Tradewinds.AbroholosPane
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Tradewinds */

/** @class The pane to display Abroholos
  @extends SC.MainPane
*/
Tradewinds.AbroholosPane = SC.MainPane.extend(
/** @scope Tradewinds.AbroholosPane.prototype */ {

    countView: SC.outlet('countLabel'),
    count: SC.outlet('countLabel.value'),

    childViews: ['backButton', 'countLabel'],

    backButton: SC.ButtonView.extend({
      layout: { top: 6, right: 6, height: 44, width: 44 },
      title: '<<',
      action: 'backPressed'
    }),

    countLabel: SC.LabelView.extend({
      layout: { centerX: 0, centerY: 0, height: 24, width: 200 },
      formatter: function(v) {
        return 'Counted ' + v;
      }
    })

});
