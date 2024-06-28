sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.kpo.lcdreporting.controller.View1", {
        onInit: function () {

        },
        onInitiateLcd : function(){
            this.getOwnerComponent().getRouter().navTo("RouteView3")
        },
        onRowClick: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2")
        },
    });
});
