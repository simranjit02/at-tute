sap.ui.jsview("atdev.view.Main", {
  getControllerName: function () {
    return "atdev.controller.Main";
  },
  createContent: function (oController) {
    var oInput = new sap.m.Input("idInput");
    // oInput.placeAt("inpu");
    var oBtn = new sap.m.Button("firstBtn", {
      text: "click me",
      // press: function () {
      //   var val = sap.ui.getCore().byId("idInput").getValue();
      //   alert(val);
      // },
    });
    // oBtn.placeAt("idBtn");
    var attachBtn = new sap.m.Button("attBtn", {
      text: "Attached",
      press: oController.onPress,
    });
    // attachBtn.placeAt("attButton");
    return [oInput, oBtn, attachBtn];
  },
});
