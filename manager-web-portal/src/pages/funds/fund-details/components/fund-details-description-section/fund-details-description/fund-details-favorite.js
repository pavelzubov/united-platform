import FavoriteIcon from "modules/favorite-asset/components/favorite-icon/favorite-icon";
import React from "react";
import { translate } from "react-i18next";
import { compose } from "redux";
import isAuthenticated from "shared/decorators/is-authenticated";

const FundDetailsFavorite = ({ t, toggleFavorite, id, isFavorite }) => (
  <div className="fund-details-description__control">
    <FavoriteIcon
      className="fund-details-description__control-icon"
      id={id}
      selected={isFavorite}
      onClick={toggleFavorite}
    />
    <div className="fund-details-description__control-text">
      {t("fund-details-page.description.addToFavorites")}
    </div>
  </div>
);

export default compose(translate(), isAuthenticated)(FundDetailsFavorite);
