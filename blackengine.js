// ==UserScript==
// @name         GeoFS Black Engine smoke addon
// @version      1.0.0
// @description  This addon will make engine smoke. Use for engine fire, and old engine which is not environmentally friendly!!
// @author       Future-Wing-Research
// @match        https://geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let activeSmoke = null;

    function toggleBlackSmoke() {
        const ac = window.geofs?.aircraft?.instance;
        if (!ac || !ac.engines) {
            console.warn("Aircraft not ready yet.");
            return;
        }

        // Turn off if active
        if (activeSmoke) {
            activeSmoke.forEach(e => e.destroy && e.destroy());
            activeSmoke = null;
            console.log("[Smoke] Black smoke stopped");
            return;
        }

        const color = new window.Cesium.Color(0, 0, 0, 0.6);
        activeSmoke = [];

        ac.engines.forEach((engine, i) => {
            const emitter = new window.geofs.fx.ParticleEmitter({
                anchor: engine.points?.contrailAnchor || { worldPosition: engine.object3d.worldPosition },
                duration: 1E10,
                rate: 0.05,
                life: 500,
                startScale: .005,
                endScale: .01,
                randomizeStartScale: .01,
                randomizeEndScale: .1,
                startOpacity: 0.9,
                endOpacity: 0.1,
                startRotation: "random",
                texture: "whitesmoke",
                velocity: new window.Cesium.Cartesian3(0, 0, 1000),
            });
            activeSmoke.push(emitter);
            setInterval(() => { window.geofs.fx.setParticlesColor(color); }, 20);
        });

        console.log("[Smoke] Black smoke started");
    }

    document.addEventListener("keydown", e => {
        if (e.repeat) return;
        if (e.key === ".") toggleBlackSmoke();
    });

    console.log('[GeoFS Smoke] Loaded — Press "." to toggle black smoke');
})();