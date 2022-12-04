import { useEffect, useState } from "react";

import { useGeolocated } from "react-geolocated";

import BrazilStates from "../data/brazil-states.json";

interface APIResponse {
  city: string;
  principalSubdivision: string;
}

export function useLocation() {
  const [city, setCity] = useState("Carregando...");
  const [uf, setUf] = useState("");

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      const latitude = coords.latitude;
      const longitude = coords.longitude;

      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}5&longitude=${longitude}&localityLanguage=pt-br`
      ).then((response) => {
        response.json().then((data: APIResponse) => {
          const state =
            BrazilStates[
              data.principalSubdivision as keyof typeof BrazilStates
            ];

          setCity(`${data.city}, `);
          setUf(state);
        });
      });
    }

    if (!isGeolocationAvailable || !isGeolocationEnabled) {
      setCity("Brasil");
      setUf("");
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  return { city, uf };
}
