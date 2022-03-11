import './contacts.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoibGlzYWxpemE2NDI4IiwiYSI6ImNrdWNrMW9hajB6NXYzMW12Ymt5M2NuZ3MifQ.T4b2--uZ14J9xjMtZtk8mg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [2.3364, 48.86091],
  zoom: 15.6
});

map.addControl(new mapboxgl.NavigationControl());

  const marker1 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: '#777777'})
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: '#777777'})
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({ color: '#777777'})
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({ color: '#777777'})
.setLngLat([2.3365, 48.8625])
.addTo(map);