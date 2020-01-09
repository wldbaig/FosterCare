var orderProcessManager = new OrderProcessManager();

$(function () {

    orderProcessManager.Init();
});

function OrderProcessManager() {

    var that = this;

    var globalVar = {

    };

    var domElement = {}

    this.Init = function () {
        InitializeVariables();
        Initialization();
    }

    function InitializeVariables() {

        domElement = {
             
            hfOrderId: $('#OrderId')
        }
    }

    function Initialization() {
        debugger;

    }

    this.UpdateStatus = function (source, id) {
        debugger; 
        var actionUrl = FC.AppConstants.URL.Action.Order.DispatchItemInOrder + "?orderDetailId=" + id;
        ServiceManager.Put(actionUrl, null, true, DispatchItemInOrderCallBack, id);
       
    }
     
    function DispatchItemInOrderCallBack(response, anchorTagElement) {
        debugger;
        if (response && response.length > 0) {

            var responseModel = response[1];

            if (response[0] == true && responseModel.MessageModel.Type == FC.AppConstants.MessageType.Success) {
                var odrdetId = responseModel.OrderDetailId;
                $('#btn_' + odrdetId).removeClass('btn-purple');
                $('#btn_' + odrdetId).addClass('btn-disabled');
                $('#btn_' + odrdetId).attr('disabled', 'disabled');
                $(anchorTagElement).text(responseModel.Status);
                FC.SiteScript.MessageBox.ShowSuccess(responseModel.MessageModel.Message);
            }
            else {
                if (response[2] == FC.AppConstants.HttpStatusCode.Forbidden) {
                    FC.SiteScript.MessageBox.ShowError(FC.AppConstants.HttpStatusCodeMessage.Forbidden);
                }
            }
        }
    }

}