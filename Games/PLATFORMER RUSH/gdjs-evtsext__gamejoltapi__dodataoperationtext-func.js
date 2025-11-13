
if (typeof gdjs.evtsExt__GamejoltAPI__DoDataOperationText !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__DoDataOperationText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__DoDataOperationText = {};
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__DoDataOperationText.asyncCallback25227300 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.idToCallbackMap.set(25227300, gdjs.evtsExt__GamejoltAPI__DoDataOperationText.asyncCallback25227300);
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "data-store/update", "", eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__DoDataOperationText.asyncCallback25227300(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25227300, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__SetErrorMessage.func(runtimeScene, "User is not connected", eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__SetSuccess.func(runtimeScene, false, eventsFunctionContext);
}
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddConnectedUser.func(runtimeScene, eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__GamejoltAPI__DoDataOperationText.asyncCallback25228188 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.idToCallbackMap.set(25228188, gdjs.evtsExt__GamejoltAPI__DoDataOperationText.asyncCallback25228188);
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "data-store/update", "", eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__DoDataOperationText.asyncCallback25228188(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25228188, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("IsGlobal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("IsGlobal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "key", eventsFunctionContext.getArgument("Key"), eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "operation", eventsFunctionContext.getArgument("Operator"), eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "value", ("" + eventsFunctionContext.getArgument("Value")), eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__DoDataOperationText.func = function(runtimeScene, IsGlobal, Key, Operator, Value, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "IsGlobal") return IsGlobal;
if (argName === "Key") return Key;
if (argName === "Operator") return Operator;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__DoDataOperationText.eventsList4(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__DoDataOperationText.registeredGdjsCallbacks = [];