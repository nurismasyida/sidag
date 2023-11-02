var mapid = L.map('mapid', {
        minZoom: 2,
        maxZoom: 18
    });

mapid.setView([-7.422543178420378, 109.23991280898288], 17);
    
L.control.scale().addTo(mapid);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapid);

// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',).addTo(mapid);

L.marker([-7.422543178420378, 109.23991280898288]).addTo(mapid)
.bindPopup(`Our Office`).openPopup();


