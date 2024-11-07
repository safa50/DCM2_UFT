AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Personnel Files").Click
'rightTriangle = AIUtil("right_triangle", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Personnel", micFromBottom, 1)).Exist
'If rightTriangle Then
'	AIUtil("right_triangle", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Personnel", micFromBottom, 1)).Click
'End If
AIUtil.FindTextBlock("Request Forms", micFromRight, 1).Click

'counter = 0
'AIUtil.Context.SetBrowserScope(BrowserWindow)
'Do
'	counter = counter + 1
'	AIUtil.FindText("ePersonnel File ", micFromTop, counter).Hover
'Loop While AIUtil.FindTextBlock(Parameter("iFormID")).Exist(0) = FALSE
'AIUtil.FindTextBlock(Parameter("iFormID")).Highlight


AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Name")).Highlight
AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Status")).Highlight
AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Status")).CheckExists True
topCell = AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Status")).GetText

If topCell = "Approved" Then 
	Reporter.ReportEvent 0, "Request Approved", "The request was approved successfully." 
Else 
	Reporter.ReportEvent 1, "Request Approved", "The request approval step failed, actual result: " + topCell 
End If

'StatusText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindText("ePersonnel File ", micFromTop, counter)).GetText
'AIUtil.FindTextBlock("Approved", micWithAnchorBelow, AIUtil.FindTextBlock(Parameter("iFormID"))).Highlight
'AIUtil.FindTextBlock("Approved", micWithAnchorBelow, AIUtil.FindTextBlock(Parameter("iFormID"))).CheckExists True








