sap.ui.jsview("atdev.view.Main", {
  getControllerName: function () {
    return "atdev.controller.Main";
  },
  createContent: function () {
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
      press: function () {
        var nBtn = sap.ui.getCore().byId("firstBtn");
        nBtn.attachPress(function () {
          alert(sap.ui.getCore().byId("idInput").getValue());
        });
      },
    });
    // attachBtn.placeAt("attButton");
    return [oInput, oBtn, attachBtn];
  },
});
