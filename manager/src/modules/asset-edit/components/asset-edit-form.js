import { Field, withFormik } from "formik";
import {
  GVButton,
  GVFormikField,
  GVTextField,
  GVProgramPeriod
} from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";
import { compose } from "redux";
import ProgramDefaultImage from "../../../pages/create-program/components/create-program-settings/program-default-image";
import InputImage from "shared/components/form/input-image/input-image";
import editAssetSettingsValidationSchema from "./asset-edit.validators";
import filesService from "../../../shared/services/file-service";
import { FUND, PROGRAM } from "../asset-edit.constants";

const AssetEditForm = ({
  t,
  dirty,
  values,
  info,
  currency,
  disabled,
  handleSubmit,
  errorMessage,
  setFieldValue,
  errors,
  notifyError,
  serverError,
  type
}) => {
  const imageInputError =
    errors &&
    errors.logo &&
    (errors.logo.width || errors.logo.height || errors.logo.size);
  return (
    <form className="dialog__bottom" id="edit-form" onSubmit={handleSubmit}>
      <GVFormikField
        type="text"
        name="title"
        label={t("create-program-page.settings.fields.name")}
        autoComplete="off"
        component={GVTextField}
      />
      <div className="edit-program__description">
        <GVFormikField
          type="textarea"
          name="description"
          label={t("create-program-page.settings.fields.description")}
          component={GVTextField}
        />
        {values.description.length > 0 && (
          <span className="create-program-settings__description-chars">
            {values.description.length}
            <GVProgramPeriod
              start={0}
              end={500}
              value={values.description.length}
            />
          </span>
        )}
      </div>
      <div className="create-program-settings__logo-title">
        {type === PROGRAM &&
          t("create-program-page.settings.fields.upload-logo")}
        {type === FUND && t("create-fund-page.settings.fields.upload-logo")}
      </div>
      <div className="create-program-settings__logo-notice">
        {t("create-program-page.settings.fields.upload-logo-rules")}
      </div>
      <div className="create-program-settings__logo-section edit-program__logo-section">
        <div className="create-program-settings__file-field-container">
          <Field
            name="logo"
            render={({ field }) => (
              <InputImage
                {...field}
                defaultImage={ProgramDefaultImage}
                onChange={setFieldValue}
                notifyError={notifyError}
                alt="Program logo"
                error={imageInputError}
              />
            )}
          />
        </div>
      </div>
      <div className="form-error">{errorMessage || serverError}</div>
      <div className="dialog__buttons">
        <GVButton
          type="submit"
          id="signUpFormSubmit"
          className="invest-form__submit-button"
          disabled={disabled || !dirty}
        >
          {t("edit-program.confirm")}
        </GVButton>
      </div>
    </form>
  );
};

export default compose(
  translate(),
  withFormik({
    displayName: "edit-form",
    mapPropsToValues: props => ({
      title: props.info.title,
      description: props.info.description,
      logo: {
        cropped: null,
        src: filesService.getFileUrl(props.info.logo.src),
        id: props.info.logo.src,
        isNew: false,
        isDefault: !!!props.info.logo.src,
        width: undefined,
        height: undefined,
        size: undefined
      }
    }),
    validationSchema: editAssetSettingsValidationSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })
)(AssetEditForm);
