sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
function (Controller,MessageBox,Fragment,JSONModel) {
    "use strict";

    return Controller.extend("com.kpo.lcdreporting.controller.View2", {
        onInit: function () {
            let data=[
                {
                "supId": "SUP1001",
                "supName": "Supplier 1",
                "status": "Pending"
            },
            {
                "supId": "SUP1002",
                "supName": "Supplier 2",
                "status": "Pending"
            }
        ]

        let sup = new JSONModel(data);
        this.getView().setModel(sup,"jModel");

        let oSelectedQuestionModel = new JSONModel([]);
        this.getView().setModel(oSelectedQuestionModel, "oSelectedQuestionModel");

        },
        onSubmit:function(){
            MessageBox.success("Suppliers has been notified")

        },
        onAddSupplier:function () {
            if (!this.AddSupplier) {
                Fragment.load({
                    id: this.getView().getId(),
                    name: "com.kpo.lcdreporting.view.fragment.AddSupplier",
                    controller: this
                }).then(oDialog => {
                    this.AddSupplier = oDialog
                    this.getView().addDependent(oDialog)
                    oDialog.open()
                })
            } else {
                this.AddSupplier.open()
            }
        },
        onCancel: function () {
            this.AddSupplier.close();
        },
        onAdd: function () {
            debugger
            let aSelectedQuestion = [];
            let oPoolOfQuestionsTable = this.getView().byId("idProductsTable1").getSelectedItems();
            // aSelectedQuestion.push(oPoolOfQuestionsTable.getBindingContext().getObject())

            aSelectedQuestion = oPoolOfQuestionsTable.map(function (item) {
                return item.getBindingContext("jModel").getObject()
            });
            let oSelectedQuestionModel = this.getView().getModel("oSelectedQuestionModel");
            oSelectedQuestionModel.setData(aSelectedQuestion);
            debugger
            oSelectedQuestionModel.refresh(true);
            this.AddSupplier.close()

        },
        formatStatus: function (sStatus) {
            if (sStatus === "Pending") {
                return "Error";
            }
            return "None";
        }
    });
});
