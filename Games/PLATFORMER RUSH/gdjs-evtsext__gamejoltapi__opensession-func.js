
if (typeof gdjs.evtsExt__GamejoltAPI__OpenSession !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__OpenSession.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__OpenSession = {};
gdjs.evtsExt__GamejoltAPI__OpenSession.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__OpenSession.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__LastSuccess.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__SetSession.func(runtimeScene, true, eventsFunctionContext);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__GamejoltAPI_Session");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__OpenSession.asyncCallback25127460 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__GamejoltAPI__OpenSession.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__OpenSession.idToCallbackMap.set(25127460, gdjs.evtsExt__GamejoltAPI__OpenSession.asyncCallback25127460);
gdjs.evtsExt__GamejoltAPI__OpenSession.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "sessions/open", "", eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__OpenSession.asyncCallback25127460(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25127460, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__OpenSession.eventsList2 = function(runtimeScene, eventsFunctionContext) {

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
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "__GamejoltAPI_Session");
}
{gdjs.evtsExt__GamejoltAPI__SetSession.func(runtimeScene, false, eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__AddConnectedUser.func(runtimeScene, eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GamejoltAPI__OpenSession.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__OpenSession.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__OpenSession.eventsList2(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__OpenSession.registeredGdjsCallbacks = [];