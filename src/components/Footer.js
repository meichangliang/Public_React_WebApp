import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <span
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
        {name}
      </span>
    );
  }

  render() {
    return (
      <p>
        Show: {this.renderFilter("SHOW_ALL", "All")}
        {", "}
        {this.renderFilter("SHOW_COMPLETED", "Completed")}
        {", "}
        {this.renderFilter("SHOW_ACTIVE", "Active")}.
      </p>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(["SHOW_ALL", "SHOW_COMPLETED", "SHOW_ACTIVE"])
    .isRequired
};

export default Footer;