// @flow

//action type
export const SHOW_APP_DESCRIPTION = 'SHOW_APP_DESCRIPTION';

//action creators
export const showDescription = (name) => {
  return {
    type: SHOW_APP_DESCRIPTION,
    name
  }
}