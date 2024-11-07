systemutil.Run "chrome.exe", "http://dctmbase-td.eastus.cloudapp.azure.com:7000/D2-Smartview"
AIUtil.SetContext Browser("creationtime:=0")

AIUtil("text_box", "User name").SetText Parameter("username")
AIUtil("text_box", "Password").SetText "OpenText123456"
AIUtil("combobox", "ePersonnel Files").Select "ePersonnel Files"
AIUtil("button", "Sign in").Click

