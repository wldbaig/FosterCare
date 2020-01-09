/// <reference path="../../bootstrap.js" />
FC.AppConstants = {
    SessionTokenKey: "sessionToken",
    MessageType: {
        Error: "Error",
        Info: "Info",
        Warning: "Warning",
        Success: "Success"
    },

    URL: {
        Action: {
            AccessDenied: FC.AppVar.AppHost + "/Error/AccessDenied",
            Distributor: {
                ChangeDistributorStatus: FC.AppVar.AppHost + "/Distributor/ChangeDistributorStatus",
            },
            Item: {
                ChangeItemStatus: FC.AppVar.AppHost + "/Item/ChangeItemStatus",
            },
            Order: {
                AddItemToOrder: FC.AppVar.AppHost + "/Order/AddItemToOrder",
                AddToOrderPartial: FC.AppVar.AppHost + "/Order/AddToOrderPartial",
                DispatchItemInOrder: FC.AppVar.AppHost + "/Order/DispatchItemInOrder"
            },
            Manufacturer: {
                ChangeManufacturerStatus: FC.AppVar.AppHost + "/Manufacturer/ChangeManufacturerStatus",
            },

            Account: {
                SetPassword: FC.AppVar.AppHost + "/Account/SetPassword",
                ChangeUserStatus: FC.AppVar.AppHost + "/Account/ChangeUserStatus",
            },
            Common: {
                GetDistributorManufacturerList: FC.AppVar.AppHost + "/Common/GetDistributorManufacturerList"
            },

        },
        API: {
            CandidateTestService: FC.AppVar.AppHost + "/api/CandidateTestService"
        },
        Script: {
            //MathJax: "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
            JQuery: FC.AppVar.AppHost + "/Scripts/jquery-1.10.2.min.js",
            Bootstrap: FC.AppVar.AppHost + "/Scripts/bootstrap.js",
            JqueryHotKeys: FC.AppVar.AppHost + "/Scripts/jquery.hotkeys.min.js",
            Mousetrap: FC.AppVar.AppHost + "/Scripts/mousetrap.min.js",
            MathJax: FC.AppVar.AppHost + "/Scripts/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
            WirisEditor: "http://www.wiris.net/demo/editor/editor",
            Application: {
                Question: {
                    kendoEditorIframe: FC.AppVar.AppHost + "/Scripts/Application/Question/QuestionEditorIframeManager.js"
                }
            }
        },
        Style: {
            kendoEditorIframeStyle: FC.AppVar.AppHost + "/Content/kendoEditorIframeStyle.css",
        },
    },
    HttpStatusCode: {
        Ok: 'OK',
        Forbidden: 'Forbidden',
        InternalServerError: 'Internal Server Error'
    },
    HttpStatusCodeMessage: {
        Forbidden: 'Sorry! Access is denied. You have no permission to perform this action.'
    },
    ImagePath: {
        AjaxLoader: FC.AppVar.AppHost + "/Content/images/ajax-loader.gif",
        NoImage: FC.AppVar.AppHost + "/Content/images/noimage.png"
    },
    TimeIntervals: {

    },
    MouseCurrentPosition: {
        X: undefined,
        Y: undefined
    },
    ActiveStatus: {
        Active: "Active",
        InActive: "InActive"
    },
    EntityStatus: {
        All: -1,
        InActive: 0,
        Active: 1,
        Delete: 2
    },
    ActionType: {
        Add: "Add",
        Edit: "Edit",
        Delete: "Delete"
    },
    Commands: {
        Add: "Add",
        Edit: "Edit",
        Delete: "Delete",
        Question: "Question"
    },
    UserRole: {
        SuperAdmin: "superadmin",
        Admin: "admin",
        Student: "student",
        DataEntry: "dataentry",
        Teacher: "teacher",
    },
}