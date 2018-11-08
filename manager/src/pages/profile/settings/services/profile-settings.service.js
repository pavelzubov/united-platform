import authActions from "actions/auth-actions";
import { fetchProfileHeaderInfo } from "modules/header/actions/header-actions";
import { authApiProxy } from "services/api-client/auth-api";
import { profileApiProxy } from "services/api-client/profile-api";
import authService from "services/auth-service";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";
import filesService from "shared/services/file-service";

export const updateProfileAvatar = ({
  croppedImage,
  submitCallback
}) => dispatch => {
  const authorization = authService.getAuthArg();
  let photoSrc = null;

  filesService
    .uploadFileProxy(croppedImage, authorization)
    .then(logoId => {
      photoSrc = filesService.getFileUrl(logoId);
      return profileApiProxy.v10ProfileAvatarUpdateByFileIdPost(
        logoId,
        authorization
      );
    })
    .then(() => dispatch(fetchProfileHeaderInfo()))
    .then(() => {
      dispatch(
        alertMessageActions.success(
          "profile.settings.image-success-save-message",
          true
        )
      );
      submitCallback(photoSrc);
    })
    .catch(error =>
      dispatch(alertMessageActions.error(error.errorMessage || error.message))
    );
};

export const removeProfileAvatar = ({ submitCallback }) => dispatch => {
  const authorization = authService.getAuthArg();

  profileApiProxy
    .v10ProfileAvatarRemovePost(authorization)
    .then(() => dispatch(fetchProfileHeaderInfo()))
    .then(() => {
      dispatch(
        alertMessageActions.success(
          "profile.settings.image-success-save-message",
          true
        )
      );
      submitCallback();
    })
    .catch(error =>
      alertMessageActions.error(error.errorMessage || error.message)
    );
};

export const logoutFromDevices = () => dispatch => {
  return authApiProxy
    .v10AuthTokenDevicesLogoutPost(authService.getAuthArg())
    .then(response => {
      authService.storeToken(response.data);
      dispatch(authActions.updateToken());
      dispatch(
        alertMessageActions.success(
          "auth.logout-from-another-devices.success-message",
          true
        )
      );
      return response;
    })
    .catch(error => {
      dispatch(alertMessageActions.error(error.errorMessage || error.message));
      return error;
    });
};
