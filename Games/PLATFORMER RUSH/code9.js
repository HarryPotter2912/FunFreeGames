gdjs.goodCode = {};
gdjs.goodCode.localVariables = [];
gdjs.goodCode.idToCallbackMap = new Map();
gdjs.goodCode.GDSCOREObjects1= [];
gdjs.goodCode.GDSCOREObjects2= [];
gdjs.goodCode.GDNewSpriteObjects1= [];
gdjs.goodCode.GDNewSpriteObjects2= [];
gdjs.goodCode.GDBlueButtonWithShadowObjects1= [];
gdjs.goodCode.GDBlueButtonWithShadowObjects2= [];
gdjs.goodCode.GDBlueButtonWithShadow2Objects1= [];
gdjs.goodCode.GDBlueButtonWithShadow2Objects2= [];
gdjs.goodCode.GDNewSprite2Objects1= [];
gdjs.goodCode.GDNewSprite2Objects2= [];


gdjs.goodCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.goodCode.GDSCOREObjects1);
{for(var i = 0, len = gdjs.goodCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.goodCode.GDSCOREObjects1[i].getBehavior("Text").setText("SCORE: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() + " / " + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDBlueButtonWithShadowObjects1[k] = gdjs.goodCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 2");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDBlueButtonWithShadowObjects1[k] = gdjs.goodCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 3");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDBlueButtonWithShadowObjects1[k] = gdjs.goodCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 4");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);
{for(var i = 0, len = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].SetLabelTextOp(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.goodCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDNewSprite2Objects1[k] = gdjs.goodCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.goodCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.goodCode.GDNewSpriteObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.goodCode.GDNewSpriteObjects1.length !== 0 ? gdjs.goodCode.GDNewSpriteObjects1[0] : null), true, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);
{for(var i = 0, len = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].SetLabelTextOp("Main Menu", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDBlueButtonWithShadowObjects1[k] = gdjs.goodCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDBlueButtonWithShadowObjects1[k] = gdjs.goodCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Level 5");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.goodCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.goodCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.goodCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.goodCode.GDBlueButtonWithShadowObjects1[k] = gdjs.goodCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.goodCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.goodCode.GDSCOREObjects1.length = 0;
gdjs.goodCode.GDSCOREObjects2.length = 0;
gdjs.goodCode.GDNewSpriteObjects1.length = 0;
gdjs.goodCode.GDNewSpriteObjects2.length = 0;
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.goodCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.goodCode.GDBlueButtonWithShadow2Objects1.length = 0;
gdjs.goodCode.GDBlueButtonWithShadow2Objects2.length = 0;
gdjs.goodCode.GDNewSprite2Objects1.length = 0;
gdjs.goodCode.GDNewSprite2Objects2.length = 0;

gdjs.goodCode.eventsList0(runtimeScene);
gdjs.goodCode.GDSCOREObjects1.length = 0;
gdjs.goodCode.GDSCOREObjects2.length = 0;
gdjs.goodCode.GDNewSpriteObjects1.length = 0;
gdjs.goodCode.GDNewSpriteObjects2.length = 0;
gdjs.goodCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.goodCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.goodCode.GDBlueButtonWithShadow2Objects1.length = 0;
gdjs.goodCode.GDBlueButtonWithShadow2Objects2.length = 0;
gdjs.goodCode.GDNewSprite2Objects1.length = 0;
gdjs.goodCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['goodCode'] = gdjs.goodCode;
