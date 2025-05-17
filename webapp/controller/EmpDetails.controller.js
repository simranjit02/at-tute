sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  return Controller.extend("atdev.controller.EmpDetails", {
    addDetails: function () {
      const empData = {
        empId: "0001",
        empName: "Simranjit sIngh",
        empSalary: "8000",
        empCurrency: "EUR",
      };
      this.getView().byId("empId").setValue(empData.empId);
      this.getView().byId("empName").setValue(empData.empName);
      this.getView().byId("empSalary").setValue(empData.empSalary);
      this.getView().byId("empCurrency").setValue(empData.empCurrency);
    },
  });
});
