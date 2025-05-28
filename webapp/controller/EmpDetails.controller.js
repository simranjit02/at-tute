sap.ui.define(
  ["sap/ui/core/mvc/Controller", "atdev/model/models"],
  function (Controller, models) {
    return Controller.extend("atdev.controller.EmpDetails", {
      onInit: function () {
        var oModel = models.createJSONModel("model/mockData/employee.json");
        sap.ui.getCore().setModel(oModel, "empData");
        var oModelInter = models.createResourceModel();
        sap.ui.getCore().setModel(oModelInter, "i18n");
      },
      addDetails: function () {},
      saveDetails: function () {
        var oModel = sap.ui.getCore().getModel("empData");
        // var oProp = oModel.getProperty("/empStr/empName");
        // console.log("oProp", oProp);
        var empVal = this.getView().byId("empName").getValue();
        oModel.setProperty("/empStr/empName", empVal);
      },
      onRowSelect: function (oEvent) {
        console.log("oEvent", oEvent);
        this.getView()
          .byId("isSimpleForm")
          .bindElement({
            path: oEvent.getParameter("rowContext").getPath(),
            model: "empData",
          });
      },
    });
  }
);
