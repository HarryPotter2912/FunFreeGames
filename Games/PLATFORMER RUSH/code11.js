gdjs.CREDITSCode = {};
gdjs.CREDITSCode.localVariables = [];
gdjs.CREDITSCode.idToCallbackMap = new Map();
gdjs.CREDITSCode.GDBackgroundObjects1= [];
gdjs.CREDITSCode.GDBackgroundObjects2= [];
gdjs.CREDITSCode.GDNewTextObjects1= [];
gdjs.CREDITSCode.GDNewTextObjects2= [];
gdjs.CREDITSCode.GDNewText2Objects1= [];
gdjs.CREDITSCode.GDNewText2Objects2= [];
gdjs.CREDITSCode.GDNewText3Objects1= [];
gdjs.CREDITSCode.GDNewText3Objects2= [];
gdjs.CREDITSCode.GDNewText4Objects1= [];
gdjs.CREDITSCode.GDNewText4Objects2= [];
gdjs.CREDITSCode.GDNewSpriteObjects1= [];
gdjs.CREDITSCode.GDNewSpriteObjects2= [];


gdjs.CREDITSCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.CREDITSCode.GDNewText4Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.CREDITSCode.GDNewText4Objects1.length !== 0 ? gdjs.CREDITSCode.GDNewText4Objects1[0] : null), false, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CREDITSCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CREDITSCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.CREDITSCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CREDITSCode.GDNewSpriteObjects1[k] = gdjs.CREDITSCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.CREDITSCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


};

gdjs.CREDITSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CREDITSCode.GDBackgroundObjects1.length = 0;
gdjs.CREDITSCode.GDBackgroundObjects2.length = 0;
gdjs.CREDITSCode.GDNewTextObjects1.length = 0;
gdjs.CREDITSCode.GDNewTextObjects2.length = 0;
gdjs.CREDITSCode.GDNewText2Objects1.length = 0;
gdjs.CREDITSCode.GDNewText2Objects2.length = 0;
gdjs.CREDITSCode.GDNewText3Objects1.length = 0;
gdjs.CREDITSCode.GDNewText3Objects2.length = 0;
gdjs.CREDITSCode.GDNewText4Objects1.length = 0;
gdjs.CREDITSCode.GDNewText4Objects2.length = 0;
gdjs.CREDITSCode.GDNewSpriteObjects1.length = 0;
gdjs.CREDITSCode.GDNewSpriteObjects2.length = 0;

gdjs.CREDITSCode.eventsList0(runtimeScene);
gdjs.CREDITSCode.GDBackgroundObjects1.length = 0;
gdjs.CREDITSCode.GDBackgroundObjects2.length = 0;
gdjs.CREDITSCode.GDNewTextObjects1.length = 0;
gdjs.CREDITSCode.GDNewTextObjects2.length = 0;
gdjs.CREDITSCode.GDNewText2Objects1.length = 0;
gdjs.CREDITSCode.GDNewText2Objects2.length = 0;
gdjs.CREDITSCode.GDNewText3Objects1.length = 0;
gdjs.CREDITSCode.GDNewText3Objects2.length = 0;
gdjs.CREDITSCode.GDNewText4Objects1.length = 0;
gdjs.CREDITSCode.GDNewText4Objects2.length = 0;
gdjs.CREDITSCode.GDNewSpriteObjects1.length = 0;
gdjs.CREDITSCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['CREDITSCode'] = gdjs.CREDITSCode;
