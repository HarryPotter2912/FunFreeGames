gdjs.previous_32levelsCode = {};
gdjs.previous_32levelsCode.localVariables = [];
gdjs.previous_32levelsCode.idToCallbackMap = new Map();
gdjs.previous_32levelsCode.GDNewSpriteObjects1= [];
gdjs.previous_32levelsCode.GDNewSpriteObjects2= [];
gdjs.previous_32levelsCode.GDNewSprite2Objects1= [];
gdjs.previous_32levelsCode.GDNewSprite2Objects2= [];
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame2Objects1= [];
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame2Objects2= [];
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame3Objects1= [];
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame3Objects2= [];
gdjs.previous_32levelsCode.GDNewTextInputObjects1= [];
gdjs.previous_32levelsCode.GDNewTextInputObjects2= [];
gdjs.previous_32levelsCode.GDNewTextObjects1= [];
gdjs.previous_32levelsCode.GDNewTextObjects2= [];


gdjs.previous_32levelsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects1.length !== 0 ? gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.previous_32levelsCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewSprite2Objects1[k] = gdjs.previous_32levelsCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "1" ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewTextInputObjects1[k] = gdjs.previous_32levelsCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "2" ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewTextInputObjects1[k] = gdjs.previous_32levelsCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.previous_32levelsCode.GDNewTextInputObjects1.length !== 0 ? gdjs.previous_32levelsCode.GDNewTextInputObjects1[0] : null), false, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "3" ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewTextInputObjects1[k] = gdjs.previous_32levelsCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 3);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "4" ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewTextInputObjects1[k] = gdjs.previous_32levelsCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 4);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "5" ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewTextInputObjects1[k] = gdjs.previous_32levelsCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.previous_32levelsCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.previous_32levelsCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.previous_32levelsCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "6" ) {
        isConditionTrue_0 = true;
        gdjs.previous_32levelsCode.GDNewTextInputObjects1[k] = gdjs.previous_32levelsCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 6);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.previous_32levelsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.previous_32levelsCode.GDNewSpriteObjects1.length = 0;
gdjs.previous_32levelsCode.GDNewSpriteObjects2.length = 0;
gdjs.previous_32levelsCode.GDNewSprite2Objects1.length = 0;
gdjs.previous_32levelsCode.GDNewSprite2Objects2.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = 0;
gdjs.previous_32levelsCode.GDNewTextInputObjects2.length = 0;
gdjs.previous_32levelsCode.GDNewTextObjects1.length = 0;
gdjs.previous_32levelsCode.GDNewTextObjects2.length = 0;

gdjs.previous_32levelsCode.eventsList0(runtimeScene);
gdjs.previous_32levelsCode.GDNewSpriteObjects1.length = 0;
gdjs.previous_32levelsCode.GDNewSpriteObjects2.length = 0;
gdjs.previous_32levelsCode.GDNewSprite2Objects1.length = 0;
gdjs.previous_32levelsCode.GDNewSprite2Objects2.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.previous_32levelsCode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.previous_32levelsCode.GDNewTextInputObjects1.length = 0;
gdjs.previous_32levelsCode.GDNewTextInputObjects2.length = 0;
gdjs.previous_32levelsCode.GDNewTextObjects1.length = 0;
gdjs.previous_32levelsCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['previous_32levelsCode'] = gdjs.previous_32levelsCode;
