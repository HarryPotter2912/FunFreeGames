
if (typeof gdjs.evtsExt__GamejoltAPI__FetchTrophies !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__FetchTrophies.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__FetchTrophies = {};
gdjs.evtsExt__GamejoltAPI__FetchTrophies.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Filter") == "achieved");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "achieved", "true", eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Filter") != "achieved");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "achieved", "false", eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchTrophies.asyncCallback25193708 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__FetchTrophies.idToCallbackMap.set(25193708, gdjs.evtsExt__GamejoltAPI__FetchTrophies.asyncCallback25193708);
gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "trophies", eventsFunctionContext.getArgument("RequestName"), eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__FetchTrophies.asyncCallback25193708(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25193708, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Filter") != "none");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList3 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__FetchTrophies.func = function(runtimeScene, RequestName, Filter, parentEventsFunctionContext) {
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
if (argName === "Filter") return Filter;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__FetchTrophies.eventsList3(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__FetchTrophies.registeredGdjsCallbacks = [];