# "Cleanup Actionable Dates" Plugin

Removes .start and .postpone dates that are no longer useful.

## Implementation Details

### stringify

- Remove any .postpone date in the past
- Remove any .start date in the past if it is not associated to a .repeat from start
