import { SHOW_POPUP, HIDE_POPUP } from "../actions/popup-actions.constants";

const initialState = {
  type: null,
  isOpen: false,
  popupType: null,
  popupProps: {},
  onSubmitPopup: () => Promise.resolve()
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        isOpen: true,
        popupType: action.popupType,
        popupProps: action.popupProps,
        onSubmitPopup: action.onSubmitPopup || initialState.onSubmitPopup
      };
    case HIDE_POPUP:
      return initialState;
    default:
      return state;
  }
};

export default popupReducer;
