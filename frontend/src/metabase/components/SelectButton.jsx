/* eslint "react/prop-types": "warn" */
import React from "react";
import PropTypes from "prop-types";

import Icon from "metabase/components/Icon";

import cx from "classnames";

const SelectButton = ({ className, style, children, hasValue = true }) => (
  <div
    style={style}
    className={cx(className, "AdminSelect", {
      "text-medium": !hasValue,
    })}
  >
    <span className="flex align-center">
      <span className="AdminSelect-content mr1">{children}</span>
      <Icon
        className="AdminSelect-chevron flex-align-right"
        name="chevrondown"
        size={12}
      />
    </span>
  </div>
);

SelectButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  hasValue: PropTypes.any,
};

export default SelectButton;
