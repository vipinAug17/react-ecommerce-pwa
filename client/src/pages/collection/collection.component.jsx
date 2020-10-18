import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import HeaderPage from "../../components/header-page/header-page.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collectionPageContainer">
    <HeaderPage title={title}> 
      <div className="collectionItemsContainer">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      </HeaderPage>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
