// ==UserScript==
// @name         GeoFS GPWS Alerts Russian
// @namespace    https://avramovic.info/
// @version      1.0.7
// @description  GPWS and other alerts for GeoFS
// @author       Nemanja Avramovic & AeroLanderAL-1[Anon]
// @match        https://www.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        GM.getResourceUrl
// @resource     h2500 https://anonmimi630-design.github.io/russian_gpws/2500.mp3
// @resource     h2000 https://anonmimi630-design.github.io/russian_gpws/2000.mp3
// @resource     h1000 https://anonmimi630-design.github.io/russian_gpws/1000.mp3
// @resource     h500 https://anonmimi630-design.github.io/russian_gpws/500.mp3
// @resource     h400 https://anonmimi630-design.github.io/russian_gpws/400.mp3
// @resource     h300 https://anonmimi630-design.github.io/russian_gpws/300.mp3
// @resource     h200 https://anonmimi630-design.github.io/russian_gpws/200.mp3
// @resource     h100 https://anonmimi630-design.github.io/russian_gpws/100.mp3
// @resource     h50 https://anonmimi630-design.github.io/russian_gpws/50.mp3
// @resource     h40 https://anonmimi630-design.github.io/russian_gpws/40.mp3
// @resource     h30 https://anonmimi630-design.github.io/russian_gpws/30.mp3
// @resource     h20 https://anonmimi630-design.github.io/russian_gpws/20.mp3
// @resource     h10 https://anonmimi630-design.github.io/russian_gpws/10.mp3
// @resource     h5 https://anonmimi630-design.github.io/russian_gpws/5.mp3
// @resource     retard https://anonmimi630-design.github.io/russian_gpws/retard.mp3
// @resource     stall https://anonmimi630-design.github.io/russian_gpws/stall.mp3
// @resource     glideSlope https://anonmimi630-design.github.io/russian_gpws/glide.mp3
// @resource     lowflaps https://anonmimi630-design.github.io/russian_gpws/flaps.mp3
// @resource     lowgear https://anonmimi630-design.github.io/russian_gpws/gear.mp3
// @resource     autopilot https://anonmimi630-design.github.io/russian_gpws/ap.mp3
// @resource     minimum https://anonmimi630-design.github.io/russian_gpws/minimums.mp3
// @resource     terrain https://anonmimi630-design.github.io/russian_gpws/pull.mp3
// @resource     bankAngle https://anonmimi630-design.github.io/russian_gpws/bank.mp3
// @resource     overspeed https://anonmimi630-design.github.io/russian_gpws/overspeed.mp3
// @resource     approaching https://anonmimi630-design.github.io/russian_gpws/apmini.mp3
// @resource     sinkrate https://anonmimi630-design.github.io/russian_gpws/sink.mp3
// ==/UserScript==

// For english
// @resource     stall https://github.com/avramovic/geofs-alerts/raw/master/audio/airbus-stall-warning.mp3
// @resource     bankangle https://github.com/avramovic/geofs-alerts/raw/master/audio/bank-angle-bank-angle.mp3
// @resource     overspeed https://github.com/avramovic/geofs-alerts/raw/master/audio/md-80-overspeed.mp3
// @resource     autopilot https://github.com/avramovic/geofs-alerts/raw/master/audio/airbus-autopilot-off.mp3
// @resource     terrain https://github.com/avramovic/geofs-alerts/raw/master/audio/terrain-terrain-pull-up.mp3
// @resource     lowgear https://github.com/avramovic/geofs-alerts/raw/master/audio/too-low-gear.mp3
// @resource     lowflaps https://github.com/avramovic/geofs-alerts/raw/master/audio/too-low-flaps.mp3
// @resource     sinkrate https://github.com/avramovic/geofs-alerts/raw/master/audio/sink-rate.mp3
// @resource     minimums https://github.com/avramovic/geofs-alerts/raw/master/audio/minimums.mp3
// @resource     approaching https://github.com/avramovic/geofs-alerts/raw/master/audio/approaching-minimums.mp3
// @resource     retard https://github.com/avramovic/geofs-alerts/raw/master/audio/airbus-retard.mp3
// @resource     h2500 https://github.com/avramovic/geofs-alerts/raw/master/audio/2500.mp3
// @resource     h1000 https://github.com/avramovic/geofs-alerts/raw/master/audio/1000.mp3
// @resource     h500 https://github.com/avramovic/geofs-alerts/raw/master/audio/500.mp3
// @resource     h400 https://github.com/avramovic/geofs-alerts/raw/master/audio/400.mp3
// @resource     h300 https://github.com/avramovic/geofs-alerts/raw/master/audio/300.mp3
// @resource     h200 https://github.com/avramovic/geofs-alerts/raw/master/audio/200.mp3
// @resource     h100 https://github.com/avramovic/geofs-alerts/raw/master/audio/100.mp3
// @resource     h50 https://github.com/avramovic/geofs-alerts/raw/master/audio/50.mp3
// @resource     h40 https://github.com/avramovic/geofs-alerts/raw/master/audio/40.mp3
// @resource     h30 https://github.com/avramovic/geofs-alerts/raw/master/audio/30.mp3
// @resource     h20 https://github.com/avramovic/geofs-alerts/raw/master/audio/20.mp3
// @resource     h10 https://github.com/avramovic/geofs-alerts/raw/master/audio/10.mp3
// @resource     h5 https://github.com/avramovic/geofs-alerts/raw/master/audio/5.mp3

// For russian
// @resource     h2500 https://anonmimi630-design.github.io/russian_gpws/2500.mp3
// @resource     h2000 https://anonmimi630-design.github.io/russian_gpws/2000.mp3
// @resource     h1000 https://anonmimi630-design.github.io/russian_gpws/1000.mp3
// @resource     h500 https://anonmimi630-design.github.io/russian_gpws/500.mp3
// @resource     h400 https://anonmimi630-design.github.io/russian_gpws/400.mp3
// @resource     h300 https://anonmimi630-design.github.io/russian_gpws/300.mp3
// @resource     h200 https://anonmimi630-design.github.io/russian_gpws/200.mp3
// @resource     h100 https://anonmimi630-design.github.io/russian_gpws/100.mp3
// @resource     h50 https://anonmimi630-design.github.io/russian_gpws/50.mp3
// @resource     h40 https://anonmimi630-design.github.io/russian_gpws/40.mp3
// @resource     h30 https://anonmimi630-design.github.io/russian_gpws/30.mp3
// @resource     h20 https://anonmimi630-design.github.io/russian_gpws/20.mp3
// @resource     h10 https://anonmimi630-design.github.io/russian_gpws/10.mp3
// @resource     h5 https://anonmimi630-design.github.io/russian_gpws/5.mp3
// @resource     retard https://anonmimi630-design.github.io/russian_gpws/retard.mp3
// @resource     stall https://anonmimi630-design.github.io/russian_gpws/stall.mp3
// @resource     glideSlope https://anonmimi630-design.github.io/russian_gpws/glide.mp3
// @resource     lowflaps https://anonmimi630-design.github.io/russian_gpws/flaps.mp3
// @resource     lowgear https://anonmimi630-design.github.io/russian_gpws/gear.mp3
// @resource     autopilot https://anonmimi630-design.github.io/russian_gpws/ap.mp3
// @resource     minimum https://anonmimi630-design.github.io/russian_gpws/minimums.mp3
// @resource     terrain https://anonmimi630-design.github.io/russian_gpws/pull.mp3
// @resource     bankAngle https://anonmimi630-design.github.io/russian_gpws/bank.mp3
// @resource     overspeed https://anonmimi630-design.github.io/russian_gpws/overspeed.mp3
// @resource     approaching https://anonmimi630-design.github.io/russian_gpws/apmini.mp3
// @resource     sinkrate https://anonmimi630-design.github.io/russian_gpws/sink.mp3

(function () {
    'use strict';
    const audioCtx = new AudioContext();

    function makeLouder(url, gainValue) {
        const audio = new Audio(url);
        const source = audioCtx.createMediaElementSource(audio);
        const gainNode = audioCtx.createGain();

        gainNode.gain.value = gainValue; // >1.0 = louder

        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        return audio;
    }

    // load the audio clips
    let stickShake;
    GM.getResourceUrl("stall").then((data) => {
        stickShake = makeLouder('data:audio/mp3;'+data, 2.5);
        stickShake.loop = true;
    });

    let bankangle;
    GM.getResourceUrl("bankangle").then((data) => {
        bankangle = makeLouder('data:audio/mp3;'+data, 5.5);
        bankangle.loop = true;
    });

    let overspeed;
    GM.getResourceUrl("overspeed").then((data) => {
        overspeed = new makeLouder('data:audio/mp3;'+data, 5.0);
        overspeed.loop = true;
    });

    let autopilot;
    GM.getResourceUrl("autopilot").then((data) => {
        autopilot = makeLouder('data:audio/mp3;'+data, 6.0);
        autopilot.loop = false;
    });

    let terrain;
    GM.getResourceUrl("terrain").then((data) => {
        terrain = makeLouder('data:audio/mp3;'+data, 2.0);
        terrain.loop = true;
    });

    let lowgear;
    GM.getResourceUrl("lowgear").then((data) => {
        lowgear = makeLouder('data:audio/mp3;'+data, 4.0);
        lowgear.loop = true;
    });

    let lowflaps;
    GM.getResourceUrl("lowflaps").then((data) => {
        lowflaps = makeLouder('data:audio/mp3;'+data, 4.0);
        lowflaps.loop = true;
    });

    let sinkrate;
    GM.getResourceUrl("sinkrate").then((data) => {
        sinkrate = makeLouder('data:audio/mp3;'+data, 6.0);
        sinkrate.loop = true;
    });

    let approaching;
    GM.getResourceUrl("approaching").then((data) => {
        approaching = makeLouder('data:audio/mp3;'+data, 4.0);
        approaching.loop = false;
    });

    let h2500;
    GM.getResourceUrl("h2500").then((data) => {
        h2500 = makeLouder('data:audio/mp3;'+data, 3.5);
        h2500.loop = false;
    });

    let h1000;
    GM.getResourceUrl("h1000").then((data) => {
        h1000 = makeLouder('data:audio/mp3;'+data, 3.5);
        h1000.loop = false;
    });

    let h500;
    GM.getResourceUrl("h500").then((data) => {
        h500 = makeLouder('data:audio/mp3;'+data, 3.5);
        h500.loop = false;
    });

    let h400;
    GM.getResourceUrl("h400").then((data) => {
        h400 = makeLouder('data:audio/mp3;'+data, 3.5);
        h400.loop = false;
    });

    let h300;
    GM.getResourceUrl("h300").then((data) => {
        h300 = makeLouder('data:audio/mp3;'+data, 3.5);
        h300.loop = false;
    });

    let h200;
    GM.getResourceUrl("h200").then((data) => {
        h200 = makeLouder('data:audio/mp3;'+data, 3.5);
        h200.loop = false;
    });

    let h100;
    GM.getResourceUrl("h100").then((data) => {
        h100 = makeLouder('data:audio/mp3;'+data, 3.5);
        h100.loop = false;
    });

    let h50;
    GM.getResourceUrl("h50").then((data) => {
        h50 = makeLouder('data:audio/mp3;'+data, 3.5);
        h50.loop = false;
    });

    let h40;
    GM.getResourceUrl("h40").then((data) => {
        h40 = makeLouder('data:audio/mp3;'+data, 3.5);
        h40.loop = false;
    });

    let h30;
    GM.getResourceUrl("h30").then((data) => {
        h30 = makeLouder('data:audio/mp3;'+data, 3.5);
        h30.loop = false;
    });

    let h20;
    GM.getResourceUrl("h20").then((data) => {
        h20 = makeLouder('data:audio/mp3;'+data, 3.5);
        h20.loop = false;
    });

    let h10;
    GM.getResourceUrl("h10").then((data) => {
        h10 = makeLouder('data:audio/mp3;'+data, 3.5);
        h10.loop = false;
    });

    let h5;
    GM.getResourceUrl("h5").then((data) => {
        h5 = makeLouder('data:audio/mp3;'+data, 3.5);
        h5.loop = false;
    });

    let minimums;
    GM.getResourceUrl("minimums").then((data) => {
        minimums = makeLouder('data:audio/mp3;'+data, 3.5);
        minimums.loop = false;
    });

    let retard;
    GM.getResourceUrl("retard").then((data) => {
        retard = makeLouder('data:audio/mp3;'+data, 4.0);
        retard.loop = false;
    });

    let apWasOn = false;
    let apIsOn = false;
    let oldAltitude = 0;
    let altitude = 0;

    // wait until flight sim is fully loaded
    let itv = setInterval(
      function(){
          if(unsafeWindow.ui && unsafeWindow.flight && unsafeWindow.geofs){
              setInterval(function() { mainLoop(); }, 500);
              clearInterval(itv);
          }
      }
      ,500);

    function isGearUp() {
        return unsafeWindow.geofs.animation.values.gearPosition == 1;
    }

    function isGearDown() {
        return unsafeWindow.geofs.animation.values.gearPosition == 0;
    }

    function seaAltitude() {
        return unsafeWindow.geofs.animation.values.altitude;
    }

    function groundAltitude() {
        return seaAltitude() - unsafeWindow.geofs.animation.values.groundElevationFeet - 50;
    }

    function isDescending() {
        return unsafeWindow.geofs.animation.values.verticalSpeed < -50;
    }

    function isSinking() {
        return unsafeWindow.geofs.animation.values.verticalSpeed < -2500;
    }

    function isAscending() {
        return unsafeWindow.geofs.animation.values.verticalSpeed > 50;
    }

    function flapsRetracted() {
        return unsafeWindow.geofs.animation.values.flapsValue == 0;
    }

    function flapsExtended() {
        return unsafeWindow.geofs.animation.values.flapsValue > 0;
    }

    function getLatitude() {
        return unsafeWindow.geofs.aircraft.instance.lastLlaLocation[0];
    }

    function getLongitude() {
        return unsafeWindow.geofs.aircraft.instance.lastLlaLocation[1];
    }

    function isOnGround() {
        return unsafeWindow.geofs.animation.values.groundContact == 1 ? true : false;
    }

    function isStalling() {
        return unsafeWindow.geofs.aircraft.instance.stalling;
    }

    function isCrashed() {
        return unsafeWindow.geofs.aircraft.instance.crashed;
    }

    function isEngineOn() {
        return unsafeWindow.geofs.aircraft.instance.engine.on;
    }

    function haversine(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometers
        const toRad = (deg) => deg * (Math.PI / 180);

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    }

    function findNearestAirport() {
        let aircraftPosition = {
            lat: getLatitude(),
            lon: getLongitude(),
        };

        let nearestAirport = null;
        let minDistance = Infinity;

        for (let i in unsafeWindow.geofs.mainAirportList) {
            let ap = unsafeWindow.geofs.mainAirportList[i];
            let airportPosition = {
                lat: ap[0],
                lon: ap[1]
            };

            let distance = haversine(
              aircraftPosition.lat,
              aircraftPosition.lon,
              airportPosition.lat,
              airportPosition.lon
            );

            if (distance < minDistance) {
                minDistance = distance;
                nearestAirport = {
                    airport: i,
                    distanceInKm: distance
                };
            }

        }

        return nearestAirport;
    }

    Audio.prototype.stop = function() {
        this.pause();
        this.currentTime = 0;
    };

    function mainLoop(){

        if (unsafeWindow.geofs.isPaused()) {
            //paused, do not run the loop
            return;
        }

        // stall alert
        !isOnGround() && isStalling() ? stickShake.play() : stickShake.stop();

        const fastPlanes = ["F-16 Fighting Falcon", "Concorde", "Sukhoi Su-35", "Boeing F/A-18F Super Hornet", "Wingsuit"];

        // bank angle alert
        if (!fastPlanes.includes(unsafeWindow.geofs.aircraft.instance.aircraftRecord.name.trim())) {
            Math.abs(unsafeWindow.geofs.animation.values.aroll) > 40 ? bankangle.play() : bankangle.stop();
        }

        // indicated airspeed overspeed alert
        if (!fastPlanes.includes(unsafeWindow.geofs.aircraft.instance.aircraftRecord.name.trim())) {
            let maxSpeed = unsafeWindow.geofs.animation.values.VNO > 0 ? unsafeWindow.geofs.animation.values.VNO+1 : 350;
            unsafeWindow.geofs.animation.values.kias > maxSpeed ? overspeed.play() : overspeed.stop();
        }

        // autopilot disconnect alert
        apIsOn = unsafeWindow.geofs.autopilot.on;
        if (apWasOn && !apIsOn) {
            autopilot.play();
        } else if (!apWasOn && apIsOn) {
            autopilot.stop();
        }
        apWasOn = apIsOn;

        // terrain alert
        if (isGearUp() && groundAltitude() <= 1000 && !isOnGround() && isEngineOn()) {
            terrain.play();
        } else {
            terrain.stop();
        }


        let nearestAp = findNearestAirport();
        if (isDescending() && groundAltitude() <= 1500 && typeof nearestAp == "object" && nearestAp.distanceInKm < 20) {
            if (isGearUp()) {
                lowgear.play();
            } else {
                lowgear.stop();

                if (flapsRetracted()) {
                    lowflaps.play();
                } else {
                    lowflaps.stop();
                }
            }

        } else {
            lowgear.stop();
            lowflaps.stop();
        }


        // sink rate
        isSinking() ? sinkrate.play() : sinkrate.stop();

        // height callouts when fully configured for landing and near airport
        altitude = groundAltitude();

        if (isDescending() && isGearDown() && flapsExtended() && typeof nearestAp == "object" && nearestAp.distanceInKm < 20) {
            if (oldAltitude > 2500 && altitude <= 2500) {
                h2500.play();
            } else if (oldAltitude > 1000 && altitude <= 1000) {
                h1000.play();
            } else if (oldAltitude > 500 && altitude <= 500) {
                h500.play();
            } else if (oldAltitude > 400 && altitude <= 400) {
                h400.play();
            } else if (oldAltitude > 350 && altitude <= 350) {
                approaching.play();
            } else if (oldAltitude > 300 && altitude <= 300) {
                h300.play();
            } else if (oldAltitude > 200 && altitude <= 200) {
                h200.play();
            } else if (oldAltitude > 150 && altitude <= 150) {
                minimums.play();
            } else if (oldAltitude > 100 && altitude <= 100) {
                h100.play();
            } else if (oldAltitude > 50 && altitude <= 50) {
                h50.play();
            } else if (oldAltitude > 40 && altitude <= 40) {
                h40.play();
            } else if (oldAltitude > 30 && altitude <= 30) {
                h30.play();
            } else if (oldAltitude > 20 && altitude <= 20) {
                h20.play();
                if (isEngineOn()) {
                    retard.play();
                }
            } else if (oldAltitude > 10 && altitude <= 10) {
                h10.play();
            } else if (oldAltitude > 5 && altitude <= 5) {
                h5.play();
            }
        }

        oldAltitude = altitude;
    }
})();