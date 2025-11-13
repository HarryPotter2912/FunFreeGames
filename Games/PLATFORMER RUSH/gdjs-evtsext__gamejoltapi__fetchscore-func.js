
if (typeof gdjs.evtsExt__GamejoltAPI__FetchScore !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__FetchScore.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__FetchScore = {};
gdjs.evtsExt__GamejoltAPI__FetchScore.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__FetchScore.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Filter") == "better_than");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "better_than", ("" + eventsFunctionContext.getArgument("FilterScore")), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Filter") != "better_than");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "worse_than", ("" + eventsFunctionContext.getArgument("FilterScore")), eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchScore.asyncCallback25182108 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__FetchScore.idToCallbackMap.set(25182108, gdjs.evtsExt__GamejoltAPI__FetchScore.asyncCallback25182108);
gdjs.evtsExt__GamejoltAPI__FetchScore.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "scores", eventsFunctionContext.getArgument("RequestName"), eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__FetchScore.asyncCallback25182108(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25182108, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchScore.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Limit") != 0);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "limit", gdjs.evtTools.common.toString(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Limit"), 1, 100)), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Limit") == 0);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "limit", "10", eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Board") != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "table_id", eventsFunctionContext.getArgument("Board"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Filter") != "none");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchScore.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchScore.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__FetchScore.func = function(runtimeScene, RequestName, Limit, Board, Filter, FilterScore, parentEventsFunctionContext) {
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
if (argName === "Limit") return Limit;
if (argName === "Board") return Board;
if (argName === "Filter") return Filter;
if (argName === "FilterScore") return FilterScore;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__FetchScore.eventsList2(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__FetchScore.registeredGdjsCallbacks = [];