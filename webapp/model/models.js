sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";
  return {
    createJSONModel: function (modelPath) {
      var oModel = new JSONModel();
      oModel.loadData(modelPath);
      return oModel;
    },
  };
});
