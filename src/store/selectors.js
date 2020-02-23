

export const selectEventsForMap = (state) => {
  let events = state.events.events.map(event => {
    return {
      id: event.id,
      lat: event.lat,
      lon: event.lon,
      name: event.event_name
    }
  })

  return events;
}