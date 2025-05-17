sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  return Controller.extend("atdev.controller.Main", {
    onPress: function () {
      var nBtn = sap.ui.getCore().byId("firstBtn");
      nBtn.attachPress(function () {
        alert(sap.ui.getCore().byId("idInput").getValue());
      });
    },

    getAlert: function () {
      var textMsg = this.getView().byId("idInputXML2").getValue();
      alert(textMsg);
    },
  });
});
