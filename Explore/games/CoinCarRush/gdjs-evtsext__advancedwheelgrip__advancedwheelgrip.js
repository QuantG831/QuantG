
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip || {};

/**
 * Behavior generated from Advanced wheel grip
 */
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip = class AdvancedWheelGrip extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCar = behaviorData.PhysicsCar !== undefined ? behaviorData.PhysicsCar : "";
    this._behaviorData.Physics2 = behaviorData.Physics2 !== undefined ? behaviorData.Physics2 : "";
    this._behaviorData.ShakeModel3D = behaviorData.ShakeModel3D !== undefined ? behaviorData.ShakeModel3D : "";
    this._behaviorData.GripRatioMin = behaviorData.GripRatioMin !== undefined ? behaviorData.GripRatioMin : Number("0.075") || 0;
    this._behaviorData.GripRatioMax = behaviorData.GripRatioMax !== undefined ? behaviorData.GripRatioMax : Number("0.5") || 0;
    this._behaviorData.GrassSpeedMaxFactor = behaviorData.GrassSpeedMaxFactor !== undefined ? behaviorData.GrassSpeedMaxFactor : Number("0.5") || 0;
    this._behaviorData.GrassGripRatioFactor = behaviorData.GrassGripRatioFactor !== undefined ? behaviorData.GrassGripRatioFactor : Number("0.25") || 0;
    this._behaviorData.GrassLinearDamplingFactor = behaviorData.GrassLinearDamplingFactor !== undefined ? behaviorData.GrassLinearDamplingFactor : Number("5") || 0;
    this._behaviorData.Surface = "Asphalt";
    this._behaviorData.GripFactor = Number("1") || 0;
    this._behaviorData.SpeedMax = Number("0") || 0;
    this._behaviorData.LinearDampling = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCar !== newBehaviorData.PhysicsCar)
      this._behaviorData.PhysicsCar = newBehaviorData.PhysicsCar;
    if (oldBehaviorData.Physics2 !== newBehaviorData.Physics2)
      this._behaviorData.Physics2 = newBehaviorData.Physics2;
    if (oldBehaviorData.ShakeModel3D !== newBehaviorData.ShakeModel3D)
      this._behaviorData.ShakeModel3D = newBehaviorData.ShakeModel3D;
    if (oldBehaviorData.GripRatioMin !== newBehaviorData.GripRatioMin)
      this._behaviorData.GripRatioMin = newBehaviorData.GripRatioMin;
    if (oldBehaviorData.GripRatioMax !== newBehaviorData.GripRatioMax)
      this._behaviorData.GripRatioMax = newBehaviorData.GripRatioMax;
    if (oldBehaviorData.GrassSpeedMaxFactor !== newBehaviorData.GrassSpeedMaxFactor)
      this._behaviorData.GrassSpeedMaxFactor = newBehaviorData.GrassSpeedMaxFactor;
    if (oldBehaviorData.GrassGripRatioFactor !== newBehaviorData.GrassGripRatioFactor)
      this._behaviorData.GrassGripRatioFactor = newBehaviorData.GrassGripRatioFactor;
    if (oldBehaviorData.GrassLinearDamplingFactor !== newBehaviorData.GrassLinearDamplingFactor)
      this._behaviorData.GrassLinearDamplingFactor = newBehaviorData.GrassLinearDamplingFactor;
    if (oldBehaviorData.Surface !== newBehaviorData.Surface)
      this._behaviorData.Surface = newBehaviorData.Surface;
    if (oldBehaviorData.GripFactor !== newBehaviorData.GripFactor)
      this._behaviorData.GripFactor = newBehaviorData.GripFactor;
    if (oldBehaviorData.SpeedMax !== newBehaviorData.SpeedMax)
      this._behaviorData.SpeedMax = newBehaviorData.SpeedMax;
    if (oldBehaviorData.LinearDampling !== newBehaviorData.LinearDampling)
      this._behaviorData.LinearDampling = newBehaviorData.LinearDampling;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PhysicsCar: this._behaviorData.PhysicsCar,
    Physics2: this._behaviorData.Physics2,
    ShakeModel3D: this._behaviorData.ShakeModel3D,
    GripRatioMin: this._behaviorData.GripRatioMin,
    GripRatioMax: this._behaviorData.GripRatioMax,
    GrassSpeedMaxFactor: this._behaviorData.GrassSpeedMaxFactor,
    GrassGripRatioFactor: this._behaviorData.GrassGripRatioFactor,
    GrassLinearDamplingFactor: this._behaviorData.GrassLinearDamplingFactor,
    Surface: this._behaviorData.Surface,
    GripFactor: this._behaviorData.GripFactor,
    SpeedMax: this._behaviorData.SpeedMax,
    LinearDampling: this._behaviorData.LinearDampling,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCar !== undefined)
      this._behaviorData.PhysicsCar = networkSyncData.props.PhysicsCar;
    if (networkSyncData.props.Physics2 !== undefined)
      this._behaviorData.Physics2 = networkSyncData.props.Physics2;
    if (networkSyncData.props.ShakeModel3D !== undefined)
      this._behaviorData.ShakeModel3D = networkSyncData.props.ShakeModel3D;
    if (networkSyncData.props.GripRatioMin !== undefined)
      this._behaviorData.GripRatioMin = networkSyncData.props.GripRatioMin;
    if (networkSyncData.props.GripRatioMax !== undefined)
      this._behaviorData.GripRatioMax = networkSyncData.props.GripRatioMax;
    if (networkSyncData.props.GrassSpeedMaxFactor !== undefined)
      this._behaviorData.GrassSpeedMaxFactor = networkSyncData.props.GrassSpeedMaxFactor;
    if (networkSyncData.props.GrassGripRatioFactor !== undefined)
      this._behaviorData.GrassGripRatioFactor = networkSyncData.props.GrassGripRatioFactor;
    if (networkSyncData.props.GrassLinearDamplingFactor !== undefined)
      this._behaviorData.GrassLinearDamplingFactor = networkSyncData.props.GrassLinearDamplingFactor;
    if (networkSyncData.props.Surface !== undefined)
      this._behaviorData.Surface = networkSyncData.props.Surface;
    if (networkSyncData.props.GripFactor !== undefined)
      this._behaviorData.GripFactor = networkSyncData.props.GripFactor;
    if (networkSyncData.props.SpeedMax !== undefined)
      this._behaviorData.SpeedMax = networkSyncData.props.SpeedMax;
    if (networkSyncData.props.LinearDampling !== undefined)
      this._behaviorData.LinearDampling = networkSyncData.props.LinearDampling;
  }

  // Properties:
  
  _getPhysicsCar() {
    return this._behaviorData.PhysicsCar !== undefined ? this._behaviorData.PhysicsCar : "";
  }
  _setPhysicsCar(newValue) {
    this._behaviorData.PhysicsCar = newValue;
  }
  _getPhysics2() {
    return this._behaviorData.Physics2 !== undefined ? this._behaviorData.Physics2 : "";
  }
  _setPhysics2(newValue) {
    this._behaviorData.Physics2 = newValue;
  }
  _getShakeModel3D() {
    return this._behaviorData.ShakeModel3D !== undefined ? this._behaviorData.ShakeModel3D : "";
  }
  _setShakeModel3D(newValue) {
    this._behaviorData.ShakeModel3D = newValue;
  }
  _getGripRatioMin() {
    return this._behaviorData.GripRatioMin !== undefined ? this._behaviorData.GripRatioMin : Number("0.075") || 0;
  }
  _setGripRatioMin(newValue) {
    this._behaviorData.GripRatioMin = newValue;
  }
  _getGripRatioMax() {
    return this._behaviorData.GripRatioMax !== undefined ? this._behaviorData.GripRatioMax : Number("0.5") || 0;
  }
  _setGripRatioMax(newValue) {
    this._behaviorData.GripRatioMax = newValue;
  }
  _getGrassSpeedMaxFactor() {
    return this._behaviorData.GrassSpeedMaxFactor !== undefined ? this._behaviorData.GrassSpeedMaxFactor : Number("0.5") || 0;
  }
  _setGrassSpeedMaxFactor(newValue) {
    this._behaviorData.GrassSpeedMaxFactor = newValue;
  }
  _getGrassGripRatioFactor() {
    return this._behaviorData.GrassGripRatioFactor !== undefined ? this._behaviorData.GrassGripRatioFactor : Number("0.25") || 0;
  }
  _setGrassGripRatioFactor(newValue) {
    this._behaviorData.GrassGripRatioFactor = newValue;
  }
  _getGrassLinearDamplingFactor() {
    return this._behaviorData.GrassLinearDamplingFactor !== undefined ? this._behaviorData.GrassLinearDamplingFactor : Number("5") || 0;
  }
  _setGrassLinearDamplingFactor(newValue) {
    this._behaviorData.GrassLinearDamplingFactor = newValue;
  }
  _getSurface() {
    return this._behaviorData.Surface !== undefined ? this._behaviorData.Surface : "Asphalt";
  }
  _setSurface(newValue) {
    this._behaviorData.Surface = newValue;
  }
  _getGripFactor() {
    return this._behaviorData.GripFactor !== undefined ? this._behaviorData.GripFactor : Number("1") || 0;
  }
  _setGripFactor(newValue) {
    this._behaviorData.GripFactor = newValue;
  }
  _getSpeedMax() {
    return this._behaviorData.SpeedMax !== undefined ? this._behaviorData.SpeedMax : Number("0") || 0;
  }
  _setSpeedMax(newValue) {
    this._behaviorData.SpeedMax = newValue;
  }
  _getLinearDampling() {
    return this._behaviorData.LinearDampling !== undefined ? this._behaviorData.LinearDampling : Number("0") || 0;
  }
  _setLinearDampling(newValue) {
    this._behaviorData.LinearDampling = newValue;
  }
}

/**
 * Shared data generated from Advanced wheel grip
 */
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.SharedData = class AdvancedWheelGripSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AdvancedWheelGrip_AdvancedWheelGripSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AdvancedWheelGrip_AdvancedWheelGripSharedData = new gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.SharedData(
      initialData
    );
  }
  return instanceContainer._AdvancedWheelGrip_AdvancedWheelGripSharedData;
}

// Methods:
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedMax((gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar")).SpeedMax((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLinearDampling((gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearDamping()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar")).SetWheelGripRatio(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGripFactor() * gdjs.evtTools.tween.ease("easeInOutCubic", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGripRatioMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGripRatioMin(), Math.abs(Math.sin(gdjs.toRad(gdjs.evtTools.common.angleDifference((gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityAngle()), (gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()) + (gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar")).SteeringAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))))))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeModel3D")).SetFrequency(0.01 * (gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityLength()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsCar": this._getPhysicsCar()
, "Physics2": this._getPhysics2()
, "ShakeModel3D": this._getShakeModel3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedWheelGrip"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedWheelGrip"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext = {};
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects3= [];


gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "") == "Asphalt");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1, gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGripFactor(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).setLinearDamping(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearDampling());
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar")).SetSpeedMax(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeModel3D")).StopShaking(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "") == "Grass");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGripFactor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGrassGripRatioFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).setLinearDamping(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearDampling() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGrassLinearDamplingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCar")).SetSpeedMax(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGrassSpeedMaxFactor(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeModel3D")).StartShaking(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "") != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSurface());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSurface(eventsFunctionContext.getArgument("Value"));
}
}
{ //Subevents
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurface = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsCar": this._getPhysicsCar()
, "Physics2": this._getPhysics2()
, "ShakeModel3D": this._getShakeModel3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedWheelGrip"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedWheelGrip"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip.prototype.SetSurfaceContext.GDObjectObjects3.length = 0;


return;
}


gdjs.registerBehavior("AdvancedWheelGrip::AdvancedWheelGrip", gdjs.evtsExt__AdvancedWheelGrip__AdvancedWheelGrip.AdvancedWheelGrip);
