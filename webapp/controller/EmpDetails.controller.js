sap.ui.define(
  ["sap/ui/core/mvc/Controller", "atdev/model/models"],
  function (Controller, models) {
    return Controller.extend("atdev.controller.EmpDetails", {
      addDetails: function () {
        var oModel = models.createJSONModel();
        sap.ui.getCore().setModel(oModel, "empData");
      },
    });
  }
);
