
if (typeof gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel = {};
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("GuestName") != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "guest", eventsFunctionContext.getArgument("GuestName"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("GuestName") == "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "guest", "Unknown", eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("GuestName") != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "guest", eventsFunctionContext.getArgument("GuestName"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("GuestName") == "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "guest", "Unknown", eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddConnectedUser.func(runtimeScene, eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.asyncCallback25161804 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.idToCallbackMap.set(25161804, gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.asyncCallback25161804);
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "scores/add", "", eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.asyncCallback25161804(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25161804, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "score", eventsFunctionContext.getArgument("Label"), eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "sort", ("" + eventsFunctionContext.getArgument("Score")), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Extra") != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "extra_data", eventsFunctionContext.getArgument("Extra"), eventsFunctionContext);
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
{isConditionTrue_0 = eventsFunctionContext.getArgument("ForceGuest");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("ForceGuest");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.func = function(runtimeScene, ForceGuest, GuestName, Score, Label, Extra, Board, parentEventsFunctionContext) {
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
if (argName === "ForceGuest") return ForceGuest;
if (argName === "GuestName") return GuestName;
if (argName === "Score") return Score;
if (argName === "Label") return Label;
if (argName === "Extra") return Extra;
if (argName === "Board") return Board;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.eventsList4(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__AddScoreWithLabel.registeredGdjsCallbacks = [];