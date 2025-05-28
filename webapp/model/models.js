sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"],
  function (JSONModel, ResourceModel) {
    "use strict";
    return {
      createJSONModel: function (modelPath) {
        var oModel = new JSONModel();
        oModel.loadData(modelPath);
        return oModel;
      },
      createResourceModel: function () {
        var oModel = new ResourceModel({
          bundleUrl: "i18n/i18n.properties",
        });
        return oModel;
      },
    };
  }
);
