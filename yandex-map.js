let center = [59.956386, 30.309993];
let zoom = 13
let city = 'Санкт-Петербург';
var maps = []

function drawMaps() {

    let mapsContainers = document.querySelectorAll('.map');
    let mapsIds = []
    for (var i = 0; i < mapsContainers.length; i++) {
        mapsIds[i] = mapsContainers[i].id
    }

    let mapsFromTd = document.querySelectorAll('.from');
    let mapsFrom = []
    for (var i = 0; i < mapsFromTd.length; i++) {
        mapsFrom[i] = mapsFromTd[i].innerHTML
    }

    let mapsToTd = document.querySelectorAll('.to');
    let mapsTo = []
    for (var i = 0; i < mapsToTd.length; i++) {
        mapsTo[i] = mapsToTd[i].innerHTML
    }

    ymaps.ready(
        async function () {

             for (var i = 0; i < maps.length; i++){
                 maps[i].destroy();
             }

            for (var i = 0; i < mapsIds.length; i++) {
                maps[i] = await new ymaps.Map(mapsIds[i], {
                    center: center,
                    zoom: zoom,
                    controls: ['zoomControl', 'trafficControl']
                })

                var multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [
                        `${city}, ${mapsFrom[i]}`,
                        `${city}, ${mapsTo[i]}`
                    ],
                    params: {results: 2}
                }, {boundsAutoApply: true});

                maps[i].geoObjects.add(multiRoute);
            }
        }
    );
}

drawMaps()