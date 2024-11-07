AIUtil.SetContext Browser("creationtime:=0")

AIUtil.FindTextBlock("Vacation Request - Approval Requested", micWithAnchorAbove, AIUtil.FindTextBlock("Task List")).Click
AIUtil("button", "Approved").Click
AIUtil("text_box", "*Login").SetText "sienna"
AIUtil("text_box", "Password").SetText "OpenText123456"
AIUtil("button", "Submit").Click
AIUtil("check_mark").CheckExists True
