
if (typeof gdjs.evtsExt__GamejoltAPI__PrepareURL !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__PrepareURL.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__PrepareURL = {};
gdjs.evtsExt__GamejoltAPI__PrepareURL.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__PrepareURL.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__GamejoltAPI__PrepareURL.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GamejoltAPI__SetURL.func(runtimeScene, "https://api.gamejolt.com/api/game/v1_2/" + eventsFunctionContext.getArgument("Endpoint") + "/", eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__SetURL.func(runtimeScene, gdjs.evtsExt__GamejoltAPI__URL.func(runtimeScene, eventsFunctionContext) + ("?game_id=" + gdjs.evtsExt__GamejoltAPI__GameIdentifier.func(runtimeScene, eventsFunctionContext)), eventsFunctionContext);
}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Parameters"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtsExt__GamejoltAPI__SetURL.func(runtimeScene, gdjs.evtsExt__GamejoltAPI__URL.func(runtimeScene, eventsFunctionContext) + ("&" + gdjs.evtTools.variable.getFirstVariableString(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Parameters"))), eventsFunctionContext);
}
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getGame().getVariables().get("__GamejoltAPI").getChild("Parameters"), 0);
}
}
}

}


};

gdjs.evtsExt__GamejoltAPI__PrepareURL.func = function(runtimeScene, Endpoint, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GamejoltAPI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GamejoltAPI"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Endpoint") return Endpoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__PrepareURL.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GamejoltAPI__PrepareURL.registeredGdjsCallbacks = [];