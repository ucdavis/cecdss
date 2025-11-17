import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import Leaflet from 'leaflet';
import { Marker, Tooltip, Circle, Polyline, useMap } from 'react-leaflet';
import { faIndustry, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapCoordinates } from '../../../models/Types';
import minTurnLogo from '../../../../../Resources/Images/minturn.png';
import { useExternalLayerContext } from '../../../../Context';

export interface ReadyMixCompanies extends MapCoordinates {
  name: string;
  location: string;
}

interface BiomassFacilityWithNearbyCementCompanies {
  distance: number;
  nearbyCementCompanies: ReadyMixCompanies;
}

export interface BiomassFaciltiesData extends MapCoordinates {
  name: string;
  location: string;
  image: string;
  nearbyCementCompanies?: BiomassFacilityWithNearbyCementCompanies[];
}

const readyMixIndustryLocations: Record<number, ReadyMixCompanies> = {
  1: {
    lat: 45.2011286,
    lng: -123.1574943,
    name: 'CalPortland',
    location: '2245 NE Cumulus Ave, McMinnville, OR 97128'
  },
  2: {
    lat: 37.855682,
    lng: -121.266313,
    name: 'CEMEX',
    location: '889 E Roth Rd, French Camp, CA 95231'
  },
  3: {
    lat: 37.9158655,
    lng: -121.1890835,
    name: 'A&A Concrete Supply',
    location: '4035 E Mariposa Rd, Stockton, CA 95215'
  },
  4: {
    lat: 37.9327791,
    lng: -121.2277091,
    name: '711 Materials',
    location: '2714 Stagecoach Rd, Stockton, CA 95215'
  },
  5: {
    lat: 37.907749,
    lng: -120.587688,
    name: '711 Materials',
    location: "6000 O'Byrnes Ferry Rd, Jamestown, CA 95327"
  },
  6: {
    lat: 38.8390351,
    lng: -121.3303181,
    name: 'CEMEX',
    location: '2680 Athens Ave, Lincoln, CA 95648'
  },
  7: {
    lat: 38.8393179,
    lng: -121.3273731,
    name: 'A&A Concrete Supply',
    location: '2930 Lesvos Ct, Lincoln, CA 95648'
  },
  8: {
    lat: 40.5488029,
    lng: -124.1525083,
    name: 'Eureka Ready Mix',
    location: '1000 Fowler Ln, Fortuna, CA 95540'
  },
};

export const BIOMASS_FACILITIES: BiomassFaciltiesData[] = [
    {
      lat: 45.198917,
      lng: -123.205154,
      name: 'Solid Carbon',
      location: '1348 SW Baker St, McMinnville, OR 97128',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png',
      nearbyCementCompanies: [
        {
          distance: 2.3,
          nearbyCementCompanies: readyMixIndustryLocations[1]
        }
      ]
    },
    {
      lat: 37.941540,
      lng: -121.325668,
      name: 'DTE Stockton',
      location: '2526 W Washington St, Stockton, CA 95203',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png',
      nearbyCementCompanies: [
        {
          distance: 10,
          nearbyCementCompanies: readyMixIndustryLocations[2]
        },
        {
          distance: 8.6,
          nearbyCementCompanies: readyMixIndustryLocations[3]
        },
        {
          distance: 9,
          nearbyCementCompanies: readyMixIndustryLocations[4]
        }
      ]
    },
    {
      lat: 37.959717,
      lng: -120.311829,
      name: 'Sierra Pacific Sonora',
      location: '14980 Camage Ave, Sonora, CA 95370',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png',
      nearbyCementCompanies: [
        {
          distance: 16,
          nearbyCementCompanies: readyMixIndustryLocations[5]
        }
      ]
    },
    {
      lat: 38.903611,
      lng: -121.305472,
      name: 'Sierra Pacific Lincoln',
      location: '1440 Lincoln Blvd, Lincoln, CA 95648',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png',
      nearbyCementCompanies: [
        {
          distance: 6.5,
          nearbyCementCompanies: readyMixIndustryLocations[6]
        },
        {
          distance: 6.2,
          nearbyCementCompanies: readyMixIndustryLocations[7]
        }
      ]
    },
    {
      lat: 40.483458,
      lng: -124.102359,
      name: 'Humboldt Sawmill Company',
      location: '125 Main St, Scotia, CA 95565',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png',
      nearbyCementCompanies: [
        {
          distance: 6.7,
          nearbyCementCompanies: readyMixIndustryLocations[8]
        }
      ]
    }
  ];

export const BiomassFacilitiesLayer = () => {
  const { selectedFacilityIndex, setSelectedFacilityIndex, hoveredFacilityIndex } = useExternalLayerContext();
  const map = useMap();
  const markerRefs = useRef<(Leaflet.Marker | null)[]>([]);

  const iconHTMLreadyMixFactory = ReactDOMServer.renderToString(
    <FontAwesomeIcon
      icon={faIndustry}
      size='2x'
      style={{
        color: '#e83f3fff',
        textShadow: '0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000'
      }}
    />
  );

  const iconHTMLBiomassFaciltiy = ReactDOMServer.renderToString(
    <FontAwesomeIcon
      icon={faWarehouse}
      size='2x'
      style={{
        color: '#fdfdfdff',
        textShadow: '0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000'
      }}
    />
  );

  const biomassFacilityIcon = new Leaflet.DivIcon({
    html: iconHTMLBiomassFaciltiy,
    className: 'biomass-facility-icon'
  });

  const readyMixIcon = new Leaflet.DivIcon({
    html: iconHTMLreadyMixFactory,
    className: 'ready-mix-icon'
  });

  // Custom card tooltip style
  const cardTooltipStyle = {
    card: {
      width: '250px',
      // border: '1px solid #ddd',
      // borderRadius: '8px',
      overflow: 'hidden',
      // boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
      backgroundColor: 'white'
    },
    imageContainer: {
      width: '100%',
      height: '100px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    content: {
      padding: '12px'
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333'
    },
    detail: {
      fontSize: '13px',
      margin: '3px 0',
      color: '#666'
    },
    icon: {
      marginRight: '5px',
      color: '#90fcc6'
    }
  };

  useEffect(() => {
    if (!map) return;

    if (selectedFacilityIndex === null) {
      // Reset map to original view with smooth animation when no facility is selected
      map.flyToBounds([
        [40.5, -122.5],
        [37.25, -119]
      ], {
        duration: 1.5,
        padding: [50, 50]
      });
      return;
    }

    const facility = BIOMASS_FACILITIES[selectedFacilityIndex];
    const nearby = facility.nearbyCementCompanies || [];

    if (nearby.length === 0) {
      map.flyTo([facility.lat, facility.lng], 12, {
        duration: 1.5
      });
      return;
    }

    const latlngs = [
      [facility.lat, facility.lng],
      ...nearby.map(p => [p.nearbyCementCompanies.lat, p.nearbyCementCompanies.lng])
    ];

    try {
      map.flyToBounds(latlngs as any, { 
        padding: [100, 100], 
        maxZoom: 11,
        duration: 1.5
      });
    } catch (e) {
      // fallback to flyTo with smooth animation
      map.flyTo([facility.lat, facility.lng], 12, {
        duration: 1.5
      });
    }
  }, [selectedFacilityIndex, map]);

  // Handle tooltip visibility based on hover
  useEffect(() => {
    markerRefs.current.forEach((marker, index) => {
      if (!marker) return;
      
      const tooltip = marker.getTooltip();
      if (!tooltip) return;

      if (hoveredFacilityIndex === index && selectedFacilityIndex !== index) {
        marker.openTooltip();
      } else if (index === 0 && hoveredFacilityIndex === null && selectedFacilityIndex === null) {
        marker.openTooltip();
      } else {
        marker.closeTooltip();
      }
    });
  }, [hoveredFacilityIndex, selectedFacilityIndex]);

  return (
    <>
      {BIOMASS_FACILITIES.map((location, index) => (
        <Marker
          key={`warehouse-${index}`}
          position={{ lat: location.lat, lng: location.lng }}
          icon={biomassFacilityIcon}
          ref={(el) => {
            markerRefs.current[index] = el as any;
          }}
          eventHandlers={{
            click: () =>
              setSelectedFacilityIndex(selectedFacilityIndex === index ? null : index)
          }}
        >
          <Tooltip
            permanent={false}
            direction='top'
            offset={[0, -20]}
            className='custom-tooltip'
            opacity={1}
          >
            <div style={cardTooltipStyle.card}>
              {index === 0 && (
                <div style={cardTooltipStyle.imageContainer}>
                  <img
                    src={minTurnLogo}
                    alt={location.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}
              <div style={cardTooltipStyle.content}>
                <div style={cardTooltipStyle.title}>{location.name}</div>
                <div style={cardTooltipStyle.detail}>
                  <span style={cardTooltipStyle.icon}>📍</span>{' '}
                  {location.location}
                </div>
              </div>
            </div>
          </Tooltip>
        </Marker>
      ))}

      {/* Render ready-mix markers and an enclosing circle for the selected facility */}
      {selectedFacilityIndex !== null &&
        BIOMASS_FACILITIES[selectedFacilityIndex] && (
          (() => {
            const facility = BIOMASS_FACILITIES[selectedFacilityIndex];
            const nearby = facility.nearbyCementCompanies || [];

            if (nearby.length === 0) return null;

            // Center the circle on the biomass facility and set radius as the
            // max distance from the facility to any nearby ready-mix plus padding
            const facilityLatLng = Leaflet.latLng(facility.lat, facility.lng);

            let maxDistance = 0;
            nearby.forEach(p => {
              const d = facilityLatLng.distanceTo(Leaflet.latLng(p.nearbyCementCompanies.lat, p.nearbyCementCompanies.lng));
              if (d > maxDistance) maxDistance = d;
            });

            const padding = 1000; // meters
            const radius = maxDistance + padding;

            return (
              <>
                {nearby.map((rm, idx) => (
                  <React.Fragment key={`readymix-${selectedFacilityIndex}-${idx}`}>
                    <Marker
                      position={{ lat: rm.nearbyCementCompanies.lat, lng: rm.nearbyCementCompanies.lng }}
                      icon={readyMixIcon}
                    >
                      <Tooltip direction='top' offset={[0, -10]}>
                        <div style={{ width: '200px' }}>
                          <div style={{ fontWeight: 700 }}>{rm.nearbyCementCompanies.name}</div>
                          <div style={{ fontSize: '13px', color: '#666' }}>{rm.nearbyCementCompanies.location}</div>
                          <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Distance: {rm.distance} miles</div>
                        </div>
                      </Tooltip>
                    </Marker>
                  </React.Fragment>
                ))}

                <Circle
                  center={[facility.lat, facility.lng]}
                  radius={radius}
                  pathOptions={{ color: '#3388ff', weight: 2, fill: false }}
                />
              </>
            );
          })()
        )}
    </>
  );
};

// zoom/focus when selection changes is handled by the `useEffect` inside the component
