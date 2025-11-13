gdjs.menuoverCode = {};
gdjs.menuoverCode.localVariables = [];
gdjs.menuoverCode.idToCallbackMap = new Map();
gdjs.menuoverCode.GDNewSprite2Objects1= [];
gdjs.menuoverCode.GDNewSprite2Objects2= [];
gdjs.menuoverCode.GDNewTextObjects1= [];
gdjs.menuoverCode.GDNewTextObjects2= [];
gdjs.menuoverCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.menuoverCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.menuoverCode.GDWhiteSleekButtonObjects1= [];
gdjs.menuoverCode.GDWhiteSleekButtonObjects2= [];
gdjs.menuoverCode.GDretryObjects1= [];
gdjs.menuoverCode.GDretryObjects2= [];
gdjs.menuoverCode.GDNewSprite3Objects1= [];
gdjs.menuoverCode.GDNewSprite3Objects2= [];


gdjs.menuoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDretryObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDretryObjects1[k] = gdjs.menuoverCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDretryObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDretryObjects1[k] = gdjs.menuoverCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDretryObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDretryObjects1[k] = gdjs.menuoverCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.menuoverCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDNewSprite3Objects1[k] = gdjs.menuoverCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDretryObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDretryObjects1[k] = gdjs.menuoverCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDretryObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDretryObjects1[k] = gdjs.menuoverCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuoverCode.GDretryObjects1.length !== 0 ? gdjs.menuoverCode.GDretryObjects1[0] : null), true, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.menuoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuoverCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.menuoverCode.GDretryObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuoverCode.GDretryObjects1[k] = gdjs.menuoverCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.menuoverCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 6);
}
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


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.menuoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuoverCode.GDNewSprite2Objects1.length = 0;
gdjs.menuoverCode.GDNewSprite2Objects2.length = 0;
gdjs.menuoverCode.GDNewTextObjects1.length = 0;
gdjs.menuoverCode.GDNewTextObjects2.length = 0;
gdjs.menuoverCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.menuoverCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.menuoverCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.menuoverCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.menuoverCode.GDretryObjects1.length = 0;
gdjs.menuoverCode.GDretryObjects2.length = 0;
gdjs.menuoverCode.GDNewSprite3Objects1.length = 0;
gdjs.menuoverCode.GDNewSprite3Objects2.length = 0;

gdjs.menuoverCode.eventsList0(runtimeScene);
gdjs.menuoverCode.GDNewSprite2Objects1.length = 0;
gdjs.menuoverCode.GDNewSprite2Objects2.length = 0;
gdjs.menuoverCode.GDNewTextObjects1.length = 0;
gdjs.menuoverCode.GDNewTextObjects2.length = 0;
gdjs.menuoverCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.menuoverCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.menuoverCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.menuoverCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.menuoverCode.GDretryObjects1.length = 0;
gdjs.menuoverCode.GDretryObjects2.length = 0;
gdjs.menuoverCode.GDNewSprite3Objects1.length = 0;
gdjs.menuoverCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['menuoverCode'] = gdjs.menuoverCode;
