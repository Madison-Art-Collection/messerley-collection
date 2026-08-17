/* Create leaflet map as another node and hide the code block, appending the leaflet node after it */
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    document.querySelectorAll("pre>code.language-geojson").forEach((elem) => {
      const jsonData = elem.textContent;
      const backup = elem.parentElement;
      backup.classList.add("unloaded");
      /* create leaflet node */
      let mapElement = document.createElement("div");
      mapElement.classList.add("map");
      backup.after(mapElement);

      var map = L.map(mapElement);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      let geoJSON = L.geoJSON(JSON.parse(jsonData), {
        onEachFeature: function (feature, layer) {
          const props = feature.properties || {};
          if (!props.name) return;
          let html = `<strong>${props.name}</strong>`;
          if (props.count) html += `<br>${props.count} token${props.count === 1 ? "" : "s"}`;
          if (props.link) html += `<br><a href="${props.link}">View on Collection page &rarr;</a>`;
          layer.bindPopup(html);
        },
      }).addTo(map);
      map.fitBounds(geoJSON.getBounds());
    });
  }
});
