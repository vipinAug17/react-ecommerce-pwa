import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as SuccessBag } from "../../assets/success-bags.svg";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./success-order.styles.scss";

const SuccessOrder = () => {
  const history = useHistory();
  return (
    <div className="success-order-page">
      <div className="center-box">
        <SuccessBag />
        <strong>Success!</strong>
        <p>
          Your order will be delivered soon. Thank you for choosing our app!
        </p>
      </div>
      <CustomButton onClick={() => history.push("/")} inverted>
        CONTINUE SHOPPING
      </CustomButton>
    </div>
  );
};

export default SuccessOrder;
