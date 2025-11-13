
if (typeof gdjs.evtsExt__GamejoltAPI__AuthenticateUser !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__AuthenticateUser.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__AuthenticateUser = {};
gdjs.evtsExt__GamejoltAPI__AuthenticateUser.idToCallbackMap = new Map();


gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__GamejoltAPI__TestMode.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__SetUsername.func(runtimeScene, eventsFunctionContext.getArgument("Username"), eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__SetUserToken.func(runtimeScene, eventsFunctionContext.getArgument("UserToken"), eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__LastSuccess.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__SetAuthenticated.func(runtimeScene, true, eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
}

}


};gdjs.evtsExt__GamejoltAPI__AuthenticateUser.asyncCallback25117132 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__AuthenticateUser.idToCallbackMap.set(25117132, gdjs.evtsExt__GamejoltAPI__AuthenticateUser.asyncCallback25117132);
gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "users/auth", "", eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__AuthenticateUser.asyncCallback25117132(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25117132, asyncObjectsList);
}
}

}


};gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__TestMode.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "username", gdjs.evtsExt__GamejoltAPI__Username.func(runtimeScene, eventsFunctionContext), eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "user_token", gdjs.evtsExt__GamejoltAPI__UserToken.func(runtimeScene, eventsFunctionContext), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__GamejoltAPI__TestMode.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "username", eventsFunctionContext.getArgument("Username"), eventsFunctionContext);
}
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "user_token", eventsFunctionContext.getArgument("UserToken"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GamejoltAPI__SetAuthenticated.func(runtimeScene, false, eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__AuthenticateUser.func = function(runtimeScene, Username, UserToken, parentEventsFunctionContext) {
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
if (argName === "Username") return Username;
if (argName === "UserToken") return UserToken;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__AuthenticateUser.eventsList3(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__AuthenticateUser.registeredGdjsCallbacks = [];