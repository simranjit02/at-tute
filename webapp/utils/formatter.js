sap.ui.define(["sap/ui/core/format/NumberFormat"], function (NumberFormat) {
  "use strict";
  return {
    upperCaseFunc: function (eml) {
      if (eml) {
        return eml.toUpperCase();
      }
    },
    oCurrencyFormat: function (amount, curr) {
      var oCurrencyFormat = NumberFormat.getCurrencyInstance();
      return oCurrencyFormat.format(amount, curr);
    },
  };
});
