// ==UserScript==
// @name         GeoFS White Engine smoke addon
// @version      1.0.0
// @description  This addon will make engine smoke. Use for airshow roleplay!!
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
            console.log("[Smoke] White smoke stopped");
            return;
        }

        const color = new window.Cesium.Color(1.0, 1.0, 1.0, 1.0);
        activeSmoke = [];

        ac.engines.forEach((engine, i) => {
            const emitter = new window.geofs.fx.ParticleEmitter({
                anchor: engine.points?.contrailAnchor || { worldPosition: engine.object3d.worldPosition },
                duration: 1E10,
                rate: 0.05,
                life: 150000,
                startScale: .01,
                endScale: .015,
                randomizeStartScale: .01,
                randomizeEndScale: .4,
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
        if (e.key === "/") toggleBlackSmoke();
    });

    console.log('[GeoFS Smoke] Loaded — Press "/" to toggle white smoke');
})();