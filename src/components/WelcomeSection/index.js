import WeddingImg from '@assets/images/wedding-logo.png';
import { bool, func, object } from 'prop-types';
import React, { Fragment, useState } from 'react';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styBackground, styHero, styWrapper } from './styles';



const DELAY_TIME = 1500;

function WelcomeSection({ location, invitedPeople, isAnonymGuest, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    // if (isAnonymGuest) return null;
    return (
      <Fragment>
        <h2 className="to-dearest">To our Dearest</h2>
        <h2 className="to-dearest-name">{invitedPeople.name}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-eby-ulfana" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Zahid &amp; Nadya</h1>
              <CountContainer />
              {renderGuestSection()}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  invitedPeople: object.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  onClickDetail: func.isRequired,
};

export default WelcomeSection;
