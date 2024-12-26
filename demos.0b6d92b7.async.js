"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[433],{91657:function(ne,D,a){a.r(D);var U=a(75271),I=a(67803),g=a(66451),B=a(38010),F=a(52676);D.default=function(){return(0,F.jsxs)(I.Z,{children:[(0,F.jsx)(g.Z,{}),(0,F.jsx)(B.Z,{spin:!0})]})}},33784:function(ne,D,a){a.r(D),a.d(D,{default:function(){return De}});var U=a(48305),I=a.n(U),g=a(75271),B=a(21608),F=a(44419),te=a(619),oe=a(25865),le=a(72934),R=a(34966),se=a(43584),ce=a(82092),ue=a.n(ce),de=a(49614),ve=function(){var i=document.getSelection();if(!i.rangeCount)return function(){};for(var r=document.activeElement,n=[],o=0;o<i.rangeCount;o++)n.push(i.getRangeAt(o));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return i.removeAllRanges(),function(){i.type==="Caret"&&i.removeAllRanges(),i.rangeCount||n.forEach(function(s){i.addRange(s)}),r&&r.focus()}},ge=function(i){var r=i||{},n=r.onSuccess,o=r.onError,s=r.disableClipboardAPI,C=s===void 0?!1:s,p=r.copiedDuration,c=(0,g.useRef)(null),A=(0,g.useState)(!1),u=A[0],S=A[1],f=(0,g.useState)(""),T=f[0],h=f[1];(0,g.useEffect)(function(){p&&setTimeout(function(){return S(!1)},p)},[u]);var l=function(){return navigator.clipboard!==void 0},y=function(t){if(o)o(t);else throw new Error(t)},d=function(t){n&&n(t),S(!0),h(t)},O=function(t){navigator.clipboard.writeText(t).then(function(){return d(t)}).catch(function(P){y(P),S(!1)})},Re=function(){l()?navigator.clipboard.writeText(""):re("copy")},re=function(t,P,v,M,x){ve();var ie=document.createRange(),Ie=document.getSelection(),m=document.createElement("span");m.style.whiteSpace="pre",x?m.textContent=x:P?M?(m.textContent=v.value,t==="cut"&&v.select()):m.textContent=P.innerText:y("Both the ref & text were undefined"),m.addEventListener("copy",function(w){w.stopPropagation()}),m.addEventListener("cut",function(w){w.stopPropagation(),M&&(v.value="")}),document.body.appendChild(m),ie.selectNodeContents(m),Ie.addRange(ie);var Be=document.execCommand(typeof t=="object"?"copy":t);Be?(d(m.textContent),m.remove(),t==="cut"&&M&&v.blur()):(y("Copy command was unsuccessful"),S(!1))},Le=function(t){return ae("copy",typeof t=="object"?void 0:t)},Oe=function(){return ae("cut")},ae=(0,g.useCallback)(function(t,P){t===void 0&&(t="copy");var v=c.current,M=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"),x=c.current;l()&&!C?P?O(P):v?M?(O(x.value),t==="cut"&&(x.value="")):O(v.innerText):y("Both the ref & text were undefined"):re(t,v,x,M,P)},[c,n,o,C]);return{ref:c,isCoppied:u,clipboard:T,clearClipboard:Re,isSupported:l,copy:Le,cut:Oe}},we=null,me=a(22068),e=a(52676),Ce=function(r){var n=r.name,o=r.isNew,s=r.theme,C=r.onCopied,p=ge(),c=p.copy,A=(0,me.Z)(ue()({},s,!!s)),u=function(){var f="import ".concat(n," from '@sensoro-design/icons/").concat(n,"';");c(f),C(n,f)};return(0,e.jsxs)("li",{className:A,onClick:u,children:[g.createElement(B[n]),(0,e.jsx)("span",{className:"s-icon-class",children:(0,e.jsx)(de.Z,{dot:o,children:n})})]})},pe={direction:"\u65B9\u5411\u4E0E\u63D0\u793A",edit:"\u7F16\u8F91\u7C7B\u56FE\u6807",operation:"\u754C\u9762\u64CD\u4F5C",map:"\u5730\u56FE&\u4F4D\u7F6E",file:"\u6587\u4EF6\u7C7B\u56FE\u6807",user:"\u4EBA\u5458&\u7528\u6237",device:"\u8BBE\u5907\u7C7B\u56FE\u6807",regionalManagement:"\u533A\u57DF\u7BA1\u7406",deviceStatus:"\u8BBE\u5907\u72B6\u6001&\u64CD\u4F5C",universal:"\u7F51\u7AD9\u901A\u7528\u56FE\u6807",other:"\u5176\u4ED6",audioVideo:"\u97F3\u5F71\u7C7B\u56FE\u6807",gallery:"\u56FE\u5E93",weather:"\u5929\u6C14",empty:"\u7A7A\u72B6\u6001",firefighting:"\u6D88\u9632\u7C7B",navigation:"\u5BFC\u822A",dataAssets:"\u6570\u636E\u8D44\u4EA7",otherBusiness:"\u5176\u4ED6\u4E1A\u52A1"},fe=function(r){var n=r.title,o=r.icons,s=o===void 0?[]:o,C=r.newIcons,p=C===void 0?[]:C,c=r.theme,A=function(S,f){se.ZP.success((0,e.jsxs)("span",{children:[(0,e.jsx)("code",{className:"copied-code",children:f})," copied \u{1F389}"]}))};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h3",{style:{margin:"1.6em 0px 0.6em"},children:pe[n]}),(0,e.jsx)("ul",{className:"s-icons-list",children:s.map(function(u){return(0,e.jsx)(Ce,{name:u,theme:c,isNew:p.indexOf(u)>=0,onCopied:A},u)})})]})},he=a(53641),Se=Object.keys(he).map(function(i){return i.replace(/(Outlined|Filled|TwoTone|Purely)$/,"")}).filter(function(i,r,n){return n.indexOf(i)===r}),j=["Up","Down","Left","Right","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Check","Close","CloseCircle","InfoCircle","ExclamationCircle","CheckCircle","CaretDown","CaretLeft","CaretRight","CaretUp"],N=["Edit","OrderedList","UnorderedList","ObliqueLine","TextAutoWidth","TextAutoHeight","Highlight","AlignCenter","AlignLeft","AlignRight","Text","ArrowTextStart","ArrowTextEnd","Eraser","OneToOne","OriginalSize"],V=["Upload","Download","Minus","Plus","MenuUnfold","MenuFold","Logout","Login","Delete","Form","Swap","Sort","ShareAlt","Batch","Reload","Search","Holder","Save","Stop","Clear","Copy","Drag","Setting","Star","Lock","Unlock","Filter","EyeInvisible","Eye","ToTop","Device"],H=["NoAlarm","NoApp","NoCar","NoCars","NoData","NoDevice","NoImage","NoPerson","NoPersons","NoVideo"],G=["Sun","Sunrise","Sunset","HeatUp","HeatDown","Blizzard","Rainstorm","Hail","LightningPro","Thunderstorm","WindSpeed","Typhoon","Leaves","AirPressure","Dew","Haze","HeavyFog","WindDirection","Frost","Noise","Drought","IcyRoad","O3","Visibility"],W=["Area","AreaPlusCircle","Building","Unit","Floor","Room","BuildingPlusCircle","Employer"],b=["Camera","NoPhoto","FastForward30S","Rewind30S","Compress","Expand","FullscreenPro","FullscreenExitPro","ZoomIn","ZoomOut","Mute","SoundSmall","Sound","ApertureMinus","AperturePlus","ZoomMinus","ZoomPlus","Audio","AudioMuted","FocusOneKey","View","OriginalRatio","Yuntai","SplitScreen","Screencast","MinusCircle","PlayCirclePro","Kinescope","KinescopeStop","Offline","RotationClose","Screenshot","Rotation","PauseCircle","PlayCircle","Video","VideoStop","FastBackward","FastForward","Play","Pause"],Z=["ImageCamera","RetrieveNonMotorVehicle","RetrieveSmile","RetrieveHumanoid","NonMotorVehicle","Car","Smile","RetrieveCar","ImageOptimization","RetrievePeople","MultiplePictures","ImageError","Humanoid","Vessel","RetrieveVessel"],k=["FolderOpen","FileUser","FileWarning","File","FilePng","FileJpg","FileJpeg","FilePro","FileSeal","FileCheck","FileTime","FilePen","FileSearch","FileReport","FileAdd","FileAudio","FileExcel","FileExclamation","FileGif","FileImage","FileInfoCircle","FileMarkdown","FilePdf","FilePpt","FileProtect","FileSync","FileTemp","FileUnknown","FileVideo","FileWord","FileZip"],z=["User","UserPlusCircle","UserMinusCircle","UserSafetyCertificate","UserSetting","UserManage","UserForeign","UserLeaveEarly","UserVip","UserTime","UserCloseCircle","UserExclamationCircle","UserRemote"],K=["DroneAirport","GasSensor","SmartBox","LinsAccess","Dormancy","Controller","Hydrolab","SmartWatch","Pm25","HumanTrafficVideo","Lpg","TrackingDevice","Pm","ArcDetection","DomeCamera","CardReader","Inclination","Chip","NaturalGas","FireHydraulics","ManholeCover","Co","Ch4","Nh3","Co2","Rainfall","WaterLevel","O2","TemperaturePatch","Thermometer","MercuryThermometer","AudibleAlarmHost","Infrared","FireHost","Leaking","Smoke","ContinuityDetection","Spray","DriveRecorder","ManualAlarmCircle","ElectricityMeter","Geomagnetism","BaseStation","FireCamera","FaceCamera","AlertCamera","FullTargetCamera","VirtualCamera","Fire","Lightning","GasAlarm","EnvironmentalMonitoring","EpidemicProtection","ParkingLot","SmartLightPole","Aim","Medical","Drone","IntelligentAccess","SmartWaterMeter","GasSensorController","RemoteFireMonitoring","PartlyCloudy","DoorLock","FireHydrant","Database","WeatherStation","ForestFireCamera","VesselIllegalWork","AircircuitBreaker","ElectricalFire","Elevator","VideoCamera","WalkieTalkie","GasMonitoring","DronePro"],$=["Landing","TakeOff","SyncOn","SyncOff","Shutdown","Leave","AudibleAlarmOpen","AudibleAlarmClose","DoorSetting","MeansAccess","DormancyCancel","Upgrade","DeploymentUnit","Poweroff","Sync","Square","NormallyOpenCancel","Battery","Wifi","Muffling","LowBatteryMuted","PowerOutage","PowerUps","SafetySearch","SafetyCertificate","SafetyCertificateCancel","PartiallyFortified","Maintenance","Tool"],J=["Compass","Ruler","PanoramaMap","Satellite","SetCenterPoint","SetCenterPointChecked","Block","Twins","Distance","Vr","DrawPolygon","DrawRectangle","DrawRound","River","Lake","Reservoir","Dam","Location","PanoramaTour","Route","HighSpeedBayonet","Waters","Hospital","Rest","Forest","Heatmap","ScenicArea","ScienceEducation","Government","SportsFacilities","CellularDiagram","BuildingMaterials","Bus","FireBreaker","MufflingDevice","GasStation","RefillStation","Dashboard","PowerPerception","ChemicalPlant","BatteryGroup","GeologicalDisaster","Fireworks","Application"],X=["WaterArea","VentilationFan","CommunicationEquipment","FireExtinguisher","Jack","FireProofDoor","PluggingEquipment","FireMonitor","Flashlight","FireEmergencyCabinet","FireHose","SafetyRope","FireTruck","MedicalKit","FireGuns","PoliceBelt","FireBrigade","Firemen","MiniatureFireStation","Supplies"],Q=["Atlas","FacePortrait","HumanBodyGallery","VehicleGallery","VehiclePortrait","AlgorithmSupermarket","AreaGrid","ComputingCenter","PersonnelPortrait","VesselGallery","VideoMonitor","VehicleRegistration","SpecialVehicles","DeviceCenter","DeviceLinkage","DeviceGroup","EventCenter","DataCenter","SpecialPopulations","PersonnelRegistration","NonMotorVehicleGallery","SiteManage","Organization","Report","Poi","Iot","Lot","HashrateCenter","DataAssets","GeoLocation","DigitalMedia","Global","MoneyWatch","SignalTower"],Y=["Plate","Applets","EllipsisCircle","More","Project","Code","Tag","Home","Banner","DelayWarning","Moon","Current","Male","Woman","Gender","LegendPro","Cake","UnorderedList","SerialNumber","Address","Collect","Calendar","TimeCircle","Qrcode","Organize","Link","Profile","Bell","PayCircle","Overview","Appstore","Alert","Message","Mobile","Phone","Image"],q=["Garage","IndoorTrack","Users","VehicleFile","Idcard","UserPen","CarPen","CarFocus","CarForeign","CarSpecial"],_=["Layout","Focus","Legend","Thumbnail","Polymerization","RingLayout","MeshLayout","RadiationLayout","OrganizePro","LicensePlate","FileWarning","Parabolic","GroupRental","HomeIsolation","SmartCommunity","Resource","NoFishing","NoSwimming","KeyArea","Handcuffs","BloodPressure","HeartRate","BloodOxygen","StepCount","GetUp","BigScreen","Tetris","Auth","Service24Hour","Insurance","SafetyKey","NotificationTemplate","Engine","Algorithm","ServiceCard","Shopping","Lins","WordOrder","LineChart","Key","BrainMap","Road","Account","Warning","FireHazard","IllegalBuilding","NucleicAcid","Elder","Operate","Tenant","DataInsights","Sleep","AlarmClock","CalendarCheck","Helmet","MolecularChain","PetDog","AreaInvasion","UseMolecularChain","WearingMask","RoadNetwork","NotSleep","ElevatorStopped","ElevatorUser","AuxiliaryPoliceOfficer","Fight","CarStop","SalesCall","VolunteerService","Statistics","GroupRule"],ye=[].concat(j,N,b,J,W,V,K,$,k,z,H,G,Z,X,Q,Y,q,_),Pe=Se.filter(function(i){return!ye.includes(i)}),ee={direction:j,edit:N,operation:V,file:k,user:z,device:K,deviceStatus:$,audioVideo:b,gallery:Z,regionalManagement:W,weather:G,map:J,firefighting:X,navigation:Q,empty:H,universal:Y,dataAssets:q,otherBusiness:_,other:Pe},Ue=null,Fe=a(26068),E=a.n(Fe),Ae=function(r){var n="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z";return(0,e.jsx)("svg",E()(E()({},r),{},{viewBox:"0 0 1024 1024",children:(0,e.jsx)("path",{d:n})}))},Ee=function(r){var n="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return(0,e.jsx)("svg",E()(E()({},r),{},{viewBox:"0 0 1024 1024",children:(0,e.jsx)("path",{d:n})}))},Te=function(r){var n="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return(0,e.jsx)("svg",E()(E()({},r),{},{viewBox:"0 0 1024 1024",children:(0,e.jsx)("path",{d:n})}))},L=function(i){return i.Outlined="Outlined",i.Filled="Filled",i.TwoTone="TwoTone",i.Purely="Purely",i}({}),Me=B,xe=function(){var r=(0,g.useState)(L.Outlined),n=I()(r,2),o=n[0],s=n[1],C=(0,g.useState)(),p=I()(C,2),c=p[0],A=p[1],u=function(){var T=Object.keys(ee).map(function(h){var l=ee[h];if(c){var y=c.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(d,O){return O}).replace(/(Filled|Outlined|TwoTone|Purely)$/,"").toLowerCase();l=l.filter(function(d){return d.toLowerCase().includes(y)})}return l=l.filter(function(d){return d!=="CopyrightCircle"}),{category:h,icons:l.map(function(d){return d+o}).filter(function(d){return Me[d]})}}).filter(function(h){var l=h.icons;return!!l.length}).map(function(h){var l=h.category,y=h.icons;return(0,e.jsx)(fe,{title:l,theme:o,icons:y,newIcons:[]},l)});return T.length===0?(0,e.jsx)(oe.Z,{style:{margin:"2em 0"}}):T},S=function(T){s(T.target.value)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le.Z,{offsetTop:80,children:(0,e.jsxs)(R.ZP.Group,{value:o,onChange:S,children:[(0,e.jsxs)(R.ZP.Button,{value:L.Outlined,children:[(0,e.jsx)(F.Z,{component:Ee})," \u7EBF\u6846\u98CE\u683C"]}),(0,e.jsxs)(R.ZP.Button,{value:L.Filled,children:[(0,e.jsx)(F.Z,{component:Ae})," \u5B9E\u5E95\u98CE\u683C"]}),(0,e.jsxs)(R.ZP.Button,{value:L.TwoTone,children:[(0,e.jsx)(F.Z,{component:Te})," \u53CC\u8272\u98CE\u683C"]}),(0,e.jsxs)(R.ZP.Button,{value:L.Purely,children:[(0,e.jsx)(te.Z,{})," \u56FE\u7247\u98CE\u683C"]})]})}),u()]})},je=a(10364),De=xe}}]);
