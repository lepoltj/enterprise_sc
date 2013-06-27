Tradewinds.AbroholosInternalState = SC.State.extend({

  superController: null,

  enterState: function() {
    console.log(this.get('superController'));
  }

});