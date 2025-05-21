sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";
  return {
    createJSONModel: function () {
      var oModel = new JSONModel();
      oModel.loadData("model/mockData/employee.json");
      return oModel;
    },
  };
});
