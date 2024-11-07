Dim MyDate
MyDate = Date   ' MyDate contains the current system date.
AIUtil.SetContext Browser("creationtime:=0")
AIUtil("button", "", micWithAnchorBelow, AIUtil.FindTextBlock("Personnel Files")).Click

'rightTriangle = AIUtil("right_triangle", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Personnel", micFromBottom, 1)).Exist
'If rightTriangle Then
'	AIUtil("right_triangle", micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Personnel", micFromBottom, 1)).Click
'End If
AIUtil.FindTextBlock("Request Forms", micFromRight, 1).Click
'wait 2
AIUtil("plus").Click
AIUtil.FindText("Add", micFromTop, 1).Click
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Smart Vacation Request", micFromBottom, 1).Hover
Browser("Request Forms - Documentum").Page("Request Forms - Documentum").WebCheckBox("Item selection").Set "ON" @@ script infofile_;_ZIP::ssf3.xml_;_
AIUtil("button", "Continue").Click
'AIUtil("combobox", "Employee td1234").Select "029501"

AIUtil.SetContext Browser("creationtime:=0")
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Employee td1234")).Click
AIUtil.FindText("029501", micFromRight, 1).Click
AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Name")).Click
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("First Name")).Click
AIUtil.FindText("Victor").Click
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Last Na me")).Click
AIUtil.FindText("Dylan", micFromRight, 1).Click
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Position")).Click
AIUtil.FindText("Shipping Clerk").Click
AIUtil("button", "Continue").Click
AIUtil("button", "Edit later").Click
AIUtil("check_box", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Name")).SetState "On"
wait 1
AIUtil("dot_menu").Click

AIUtil.FindTextBlock("Send to workflow").Click
AIUtil.FindText("Request", micFromRight, 1).Click

vrNumber= AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("HR Vacation Request", micFromTop, 1)).GetText
Parameter("oFormID")= vrNumber
Print Parameter("oFormID")
AIUtil("button", "Next").Click
AIUtil("combobox", "Manager").SetText "sienna miller"
AIUtil.FindTextBlock("Sienna Miller").Click

AIUtil("button", "Next").Click
AIUtil("button", "Next").Click
AIUtil("check_box", "Send notification when the workflow starts").SetState "On"

AIUtil("text_box", "Launch on").SetText MyDate
AIUtil("button", "Finish").Click

'oNumber = AIUtil.FindText(micAnyText, micWithAnchorOnRight, AIUtil("close")).GetText
'
'words = Split(oNumber, " ")
'B = words(0) & " " & words(1) & " " & words(2) & " " & words(3) & " " & words(4) & " " & words(5)
'C = Replace(B, """", "")
'Parameter("oFormID") = C
'Print Parameter("oFormID")
