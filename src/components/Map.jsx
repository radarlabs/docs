import React from 'react';
import maplibregl from 'maplibre-gl';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class Map extends React.Component {
  componentDidMount() {
    const map = new maplibregl.Map({
      container: 'map',
      style: `https://api.radar.io/maps/styles/radar-default-v1?publishableKey=${PUBLISHABLE_KEY}`,
      center: [-73.9911, 40.7342], // NYC
      zoom: 11
    });

    map.addControl(new maplibregl.NavigationControl());

    new maplibregl.Marker({ color: '#007aff' }).setLngLat([-73.9911, 40.7342]).addTo(map); // Radar HQ
  }

  render() {
    return (
      <div id="map-container" style={{ height: '20rem', margin: '1rem 0', position: 'relative', width: '95%' }}>
        <div id="map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
        <a id="map-watermark" href="https://radar.com" target="_blank" style={{ bottom: 0, height: '38px', left: '10px', position: 'absolute', width: '80px' }}>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTI1IDM4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNy4xMDYgMzAuNjgxdjFoOC4xMTFWMjQuMjlsMy45MTIgNi44ODYuMjg4LjUwNmg4Ljc4OGwtLjg3LTEuNS00LjU3NC03Ljg5NGMuODMtLjQ1NCAxLjU3NS0xLjA1NCAyLjE2MS0xLjgzNi44MzItMS4xMSAxLjI5LTIuNTE1IDEuMjktNC4yMjV2LS4xMmMwLTIuNTA4LS44ODItNC41MjItMi42NTEtNS44NzUtMS43MjQtMS4zMTgtNC4xNTUtMS45MDQtNy4wNjctMS45MDRoLTkuMzg4VjMwLjY4Wm0yNS42NjYgMS4zNTljMS41MjYgMCAyLjcyLS4zNDcgMy42NDQtLjg4OHYuNTNoNy4yMTNWMjAuNTU2YzAtMi4zMTYtLjc4Mi00LjExNS0yLjMwMi01LjMwMi0xLjQ3NS0xLjE1Mi0zLjUtMS42MTItNS43NjgtMS42MTItMi4yNyAwLTQuMzExLjQ4OS01Ljg0MyAxLjU4My0xLjU2NyAxLjExOC0yLjUwNyAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1NGMtLjE5OS4wOS0uMzkuMTg5LS41NzQuMjkzLS44NDYuNDg0LTEuNTM3IDEuMTI3LTIuMDEyIDEuOTU0LS40NzQuODI3LS43MDEgMS43ODMtLjcwMSAyLjg0NiAwIDEuOTM3Ljc0MiAzLjQxMyAxLjk4IDQuMzc3IDEuMjAzLjkzNSAyLjc3IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODIgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA1LS4zMTYuMTUxLS41MTYuMjY4LS42MzUuMTA2LS4xMDkuMzI5LS4yNTcuODU1LS4yNTcuNjU3IDAgLjgwMi4xNzguODU1LjI1NC4wNzIuMTAzLjEzOS4yODEuMTc3LjU4NGgtLjQ2M1pNODUuMzgzIDMwLjgzdi44NWg3LjM2M1Y3LjE5MmgtNy4zNjN2Ny41MTNhNS41MiA1LjUyIDAgMCAwLS4zMjMtLjIwNGMtLjk2NS0uNTYzLTIuMTI3LS44NTctMy41LS44NTctMi4xMjUgMC00LjA3LjgxOS01LjQ3MiAyLjQyNi0xLjM5MyAxLjU5OC0yLjE3OSAzLjg5LTIuMTc5IDYuNzI4di4yMzljMCAyLjg4Mi43OTMgNS4xNDUgMi4xOTQgNi42OTggMS40MDcgMS41NjEgMy4zMzcgMi4zMDYgNS4zOTcgMi4zMDYgMS41MjcgMCAyLjg0OC0uNDYzIDMuODgzLTEuMjFabTEzLjkzIDEuMjA5YzEuNTI2IDAgMi43Mi0uMzQ3IDMuNjQ0LS44ODh2LjUzaDcuMjEyVjIwLjU1NmMwLTIuMzE2LS43ODItNC4xMTUtMi4zMDEtNS4zMDItMS40NzYtMS4xNTItMy41LTEuNjEyLTUuNzY5LTEuNjEyLTIuMjcgMC00LjMxLjQ4OS01Ljg0MiAxLjU4My0xLjU2NyAxLjExOC0yLjUwOCAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1M2MtLjE5OC4wOS0uMzkuMTg5LS41NzMuMjkzLS44NDYuNDg0LTEuNTM4IDEuMTI3LTIuMDEzIDEuOTU0LS40NzQuODI3LS43IDEuNzgzLS43IDIuODQ2IDAgMS45MzcuNzQyIDMuNDEzIDEuOTggNC4zNzcgMS4yMDIuOTM1IDIuNzY5IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODMgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA0OS0uMzE2LjE1MS0uNTE2LjI2Ny0uNjM1LjEwNy0uMTA5LjMyOS0uMjU3Ljg1Ni0uMjU3LjY1NyAwIC44MDIuMTc4Ljg1NS4yNTQuMDcyLjEwMy4xMzkuMjgxLjE3Ny41ODRoLS40NjNabTguODkgMTAuNDM4djFoNy4zNjJ2LTguNDA3YzAtLjk4LjMyOC0xLjUxNC44NTEtMS44NTMuNjA0LS4zOTIgMS42MjQtLjYyNSAzLjE4NS0uNTgybDEuMDI3LjAyOHYtNy4wMDRsLS45ODgtLjAxMmMtMS4zNTYtLjAxNy0yLjU4MS4yNi0zLjYyNS45MzMtLjE1Ni4xLS4zMDYuMjA5LS40NS4zMjR2LTEuMDQ4aC03LjM2MlYzMC42ODFaTTQ1LjIxNyAxOC4wNjN2LTMuMTM3aDEuMDA3Yy45MDggMCAxLjQwOS4xNjUgMS42NjkuMzYuMi4xNS4zODcuNDE2LjM4NyAxLjA2di4xMTljMCAuNjY1LS4xODguOTk1LS40MTMgMS4xODUtLjI1OC4yMTctLjc1NC40MTMtMS42NzMuNDEzaC0uOTc3Wm0xOS40MTMgOC4zNjNjLS40OTcgMC0uNy0uMTE0LS43NjMtLjE2Ni0uMDM1LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM2LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ1LS4wNy4xNTUtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxLjM0LS4xNTIuNTk2LS4zODguNzg3LS4yNjMuMjE0LS42OTQuMzc5LTEuMjc3LjM3OVptMTguNzU3LS40NzhjLS42NjUgMC0xLjExNC0uMjI3LTEuNDI0LS42Mi0uMzM2LS40MjYtLjYwMS0xLjE2OC0uNjAxLTIuMzUydi0uMjM5YzAtMS4yNTIuMjUyLTIuMDEyLjU4Mi0yLjQ0LjI5NC0uMzgxLjc0My0uNjIyIDEuNTAzLS42MjIuNzI4IDAgMS4xODYuMjQ0IDEuNDkzLjY0MS4zMzguNDM5LjU5MyAxLjE5Ni41OTMgMi4zOTF2LjIzOWMwIDEuMTk2LS4yNzIgMS45NC0uNjE5IDIuMzY3LS4zMjIuMzk2LS44LjYzNS0xLjUyNy42MzVabTE3Ljc4NC40NzhjLS40OTcgMC0uNy0uMTE0LS43NjQtLjE2Ni0uMDM0LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM3LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ2LS4wNy4xNTYtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxMS4zNC0uMTUyLjU5Ni0uMzg4Ljc4Ny0uMjY0LjIxNC0uNjk1LjM3OS0xLjI3Ny4zNzlaTTE2LjM2OCA1LjYyMmwtLjkyNi0yLjI2NS0uOTI1IDIuMjY1LTExLjQ0MyAyOC0uOTEgMi4yMjcgMi4yMi0uOTI2IDExLjA1OC00LjYxIDExLjA1OCA0LjYxIDIuMjIuOTI2LS45MS0yLjIyNy0xMS40NDItMjhaIiBmaWxsPSIjMDYxQTJCIiBmaWxsLW9wYWNpdHk9IjAuNTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+PC9zdmc+" height="38" width="80" />
        </a>
      </div>
    );
  }
};

export default Map;
