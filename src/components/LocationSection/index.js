import { GOOGLE_MAPS_LINK } from '@/constants';
import React, { Fragment } from 'react';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">
                Lokasi Acara
              </h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#828282" }}
                >
                  <strong>Buka Google Maps</strong>
                </a>
                <br />
                Ponpes AL-Aqsho, Mamben Daya, Wanasaba, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83653
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.631240239784!2d116.56200451364394!3d-8.570741142351658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc49b5d2ff8b81%3A0x90046de4b7253d24!2sPONPES%20AL%20AQSHO!5e0!3m2!1sid!2sid!4v1609670527464!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Zahid & Nadya Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
