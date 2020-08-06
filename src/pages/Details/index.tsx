import React, { useEffect } from "react";

import { MdRoom, MdInfo, MdExplore, MdArrowBack } from "react-icons/md";
import { Container, DetailContainer, NavigationContainer } from "./styles";
import colors from "../../utils/colors";
import Map from "google-map-react";

const Details: React.FC<any> = ({ history, match }) => {
  useEffect(() => {
    const { idcountry } = match.params;
    if (idcountry) fetchData(idcountry);
  }, [match.params]);

  function fetchData(countryId: number): void {
    console.log(countryId);
  }

  function backPage() {
    console.log(history);
    history.goBack();
  }

  return (
    <Container>
      <NavigationContainer>
        <MdArrowBack size={26} onClick={backPage} className="back-button" />
      </NavigationContainer>
      <DetailContainer>
        <header>
          <MdRoom size={26} />
          <h2>República Democrática do Congo</h2>
        </header>
        <div className="detail-body">
          <img src="https://restcountries.eu/data/mlt.svg" alt="" />
          {/* <h2>República Democrática do Congo</h2> */}
          <div className="divider">
            <MdInfo color={colors.secoundary} size={26} />
            Informations
          </div>
          <section>
            <div className="item">
              <span>Population</span>
              <p>54545</p>
            </div>
            <div className="item">
              <span>Capital</span>
              <p>54545</p>
            </div>
            <div className="item">
              <span>Area</span>
              <p>54545</p>
            </div>
            <div className="item">
              <span>Currency</span>
              <p>54545</p>
            </div>
            <div className="item">
              <span>Top Level Domain</span>
              <p>54545</p>
            </div>
          </section>
          <div className="divider">
            <MdExplore color={colors.secoundary} size={26} />
            Location
          </div>
          <section className="map-container">
            <Map
              bootstrapURLKeys={{
                key: "AIzaSyC16AzrS3l5wCYs3ECBCUbEazVkZJguyjQ",
              }}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{ lat: 14.666667, lng: -61 }}
              defaultZoom={11}
            >
              <AnyReactComponent lat={14.666667} lng={-61} />
            </Map>
          </section>
        </div>
      </DetailContainer>
    </Container>
  );
};

const AnyReactComponent: React.FC<any> = () => (
  <MdRoom size={36} color={colors.primary} />
);

export default Details;
