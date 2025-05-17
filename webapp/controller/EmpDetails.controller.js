sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  return Controller.extend("atdev.controller.EmpDetails", {
    addDetails: function () {
      const empData = {
        empId: "0001",
        empName: "Simranjit sIngh",
        empSalary: "8000",
        empCurrency: "EUR",
      };
      const oView = this.getView();

      Object.entries(empData).forEach(([key, value]) => {
        const field = oView.byId(key);
        if (field) {
          field.setValue(value);
        }
      });
    },
  });
});
