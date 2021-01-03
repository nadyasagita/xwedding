import React, { Fragment } from 'react';
import { styWrapper } from './styles';
import WeddingInfoBox from './WeddingInfoBox';


function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Walimah</h2>
              <span className="sub-title sub-title__wedding">InsyaAllah akan Diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Akad Nikah"
                time="09:00 AM WITA"
                date="Ahad, 17 Januari 2021"
                description="Lokasi: Desa Mamben Daya, Kecamatan Wanasaba, Lombok Timur,"
                mobileDescription="Desa Mamben Daya <br />Kecamatan Wanasaba, Lombok Timur"
              />
              <WeddingInfoBox
                title="Walimah"
                time="11:00 WITA - Selesai"
                date="Ahad, 17 Januari 2021"
                description="Lokasi: Desa Mamben Daya, Kecamatan Wanasaba, Lombok Timur,"
                mobileDescription="Desa Mamben Daya <br />Kecamatan Wanasaba, Lombok Timur"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
