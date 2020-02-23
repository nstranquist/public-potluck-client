

export const selectEventsForMap = (state) => {
  let events = state.events.events.filter(event => {
    if(event.coordinates[0] !== null && event.coordinates[1] !== null) {
      return {
        id: event._id,
        coordinates: event.coordinates,
        name: event.event_name
      }
    }
  })
  console.log('selected events:', events)

  return events;
}