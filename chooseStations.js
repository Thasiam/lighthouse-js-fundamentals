const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// Capacity  at least 20
// Stations can be schools OR community centres

function chooseStations(stations) {
  let results = []

  for (const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {
      const type = station[2]

      if (type === "school" || type === "community centre") {
        results.push(station[0])
      }
    }
  }

  return results
}