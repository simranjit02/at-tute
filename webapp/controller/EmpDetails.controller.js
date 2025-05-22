sap.ui.define(
  ["sap/ui/core/mvc/Controller", "atdev/model/models"],
  function (Controller, models) {
    return Controller.extend("atdev.controller.EmpDetails", {
      addDetails: function () {
        var oModel = models.createJSONModel("model/mockData/employee.json");
        sap.ui.getCore().setModel(oModel, "empData");
      },
      saveDetails: function () {
        var oModel = sap.ui.getCore().getModel("empData");
        // var oProp = oModel.getProperty("/empStr/empName");
        // console.log("oProp", oProp);
        var empVal = this.getView().byId("empName").getValue();
        oModel.setProperty("/empStr/empName", empVal);
        console.log("oModel", oModel);
      },
    });
  }
);
