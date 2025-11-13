
if (typeof gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier = {};
gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.asyncCallback25197564 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.idToCallbackMap.set(25197564, gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.asyncCallback25197564);
gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "trophies", eventsFunctionContext.getArgument("RequestName"), eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.asyncCallback25197564(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25197564, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "trophy_id", eventsFunctionContext.getArgument("Trophy"), eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.func = function(runtimeScene, RequestName, Trophy, parentEventsFunctionContext) {
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
if (argName === "RequestName") return RequestName;
if (argName === "Trophy") return Trophy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__FetchTrophiesByIdentifier.registeredGdjsCallbacks = [];