import React, { useEffect, useState } from "react";

import { MdRoom, MdInfo, MdExplore, MdArrowBack } from "react-icons/md";
import { Container, DetailContainer, NavigationContainer } from "./styles";
import colors from "../../utils/colors";
import Map from "google-map-react";
import { gql, useLazyQuery } from "@apollo/client";
import { Country } from "../../interfaces/country";
import { Load } from "../../components";

const GET_COUNTRY = gql`
  query ListCountry($countryId: String!) {
    Country(_id: $countryId) {
      _id
      name
      capital
      area
      population
      location {
        latitude
        longitude
      }
      flag {
        svgFile
      }
      currencies {
        name
        symbol
      }
      topLevelDomains {
        name
      }
    }
  }
`;

const Details: React.FC<any> = ({ history, match }) => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [getCountry, { loading, data }] = useLazyQuery(GET_COUNTRY);

  useEffect(() => {
    if (data) setCountry(data.Country[0]);
    console.log(data);
  }, [data]);

  useEffect(() => {
    const { idcountry } = match.params;
    if (idcountry) {
      getCountry({ variables: { countryId: `${idcountry}` } });
    }
  }, [getCountry, match.params]);

  function backPage() {
    console.log(history);
    history.goBack();
  }

  if (loading) return <Load />;

  return (
    <Container>
      <NavigationContainer>
        <MdArrowBack size={26} onClick={backPage} className="back-button" />
      </NavigationContainer>
      <DetailContainer>
        <header>
          <MdRoom size={26} color={colors.primary} />
          <h2>{country?.name}</h2>
        </header>
        <div className="detail-body">
          <img src={country?.flag.svgFile} alt="" />
          <div className="divider">
            <MdInfo color={colors.secoundary} size={26} />
            Informations
          </div>
          <section>
            <div className="item">
              <span>Population</span>
              <p>{country?.population}</p>
            </div>
            <div className="item">
              <span>Capital</span>
              <p>{country?.capital}</p>
            </div>
            <div className="item">
              <span>Area</span>
              <p>{country?.area} km²</p>
            </div>
            <div className="item">
              <span>Currency</span>
              <p>
                {country?.currencies?.map((c) => (
                  <>{c.name}</>
                ))}
              </p>
            </div>
            <div className="item">
              <span>Top Level Domain</span>
              <p>
                {country?.topLevelDomains?.map((domain) => (
                  <>{domain.name}</>
                ))}
              </p>
            </div>
          </section>
          <div className="divider">
            <MdExplore color={colors.secoundary} size={26} />
            Location
          </div>
          <section className="map-container">
            {country?.location && (
              <Map
                bootstrapURLKeys={{
                  key: "AIzaSyC16AzrS3l5wCYs3ECBCUbEazVkZJguyjQ",
                }}
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={{
                  lat: country?.location.latitude,
                  lng: country?.location.longitude,
                }}
                defaultZoom={5}
              >
                <AnyReactComponent
                  lat={country?.location.latitude}
                  lng={country?.location.longitude}
                />
              </Map>
            )}
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
