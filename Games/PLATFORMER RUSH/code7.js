gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDStartButtonObjects1= [];
gdjs.MainMenuCode.GDStartButtonObjects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDNewTextObjects1= [];
gdjs.MainMenuCode.GDNewTextObjects2= [];
gdjs.MainMenuCode.GDNewSprite4Objects1= [];
gdjs.MainMenuCode.GDNewSprite4Objects2= [];
gdjs.MainMenuCode.GDNewSprite5Objects1= [];
gdjs.MainMenuCode.GDNewSprite5Objects2= [];
gdjs.MainMenuCode.GDNewSprite6Objects1= [];
gdjs.MainMenuCode.GDNewSprite6Objects2= [];
gdjs.MainMenuCode.GDNewSprite7Objects1= [];
gdjs.MainMenuCode.GDNewSprite7Objects2= [];
gdjs.MainMenuCode.GDNewSprite8Objects1= [];
gdjs.MainMenuCode.GDNewSprite8Objects2= [];
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1= [];
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects2= [];
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1= [];
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 1");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].SetLabelTextOp(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 2");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 3");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame2"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "previous levels", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length !== 0 ? gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 4");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame3"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CREDITS", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 5");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 6");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDStartButtonObjects1.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite6Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite6Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite7Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite7Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite8Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite8Objects2.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
gdjs.MainMenuCode.GDStartButtonObjects1.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite6Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite6Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite7Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite7Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite8Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite8Objects2.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.MainMenuCode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
