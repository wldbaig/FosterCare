//AppHostPrefix: It is defined in all master page files

FC.AppVar = {
    AppHost: document.location.protocol + "//" + document.location.host + AppHostPrefix,
    AppSetting: {
        IsNavigationMenuPinned: true        
    },
    SaveAppSetting: function () {       
        localStorage.setItem('FC.AppVar.AppSetting', JSON.stringify(FC.AppVar.AppSetting));
    }
}

if (localStorage.getItem("FC.AppVar.AppSetting")) {
    FC.AppVar.AppSetting = JSON.parse(localStorage.getItem("FC.AppVar.AppSetting"));
}