const cityD = [
  {
    id: 2661350,
    name: 'Buchrain',
    state: '',
    country: 'CH',
    coord: {
      lon: 8.34621,
      lat: 47.086021,
    },
  },
  {
    id: 2661352,
    name: 'Buchholterberg',
    state: '',
    country: 'CH',
    coord: {
      lon: 7.67463,
      lat: 46.813511,
    },
  },
  {
    id: 2661359,
    name: 'Bubikon',
    state: '',
    country: 'CH',
    coord: {
      lon: 8.8179,
      lat: 47.266979,
    },
  },
  {
    id: 2661360,
    name: 'Bubendorf',
    state: '',
    country: 'CH',
    coord: {
      lon: 7.73759,
      lat: 47.445862,
    },
  },
  {
    id: 2661361,
    name: 'Brüttisellen',
    state: '',
    country: 'CH',
    coord: {
      lon: 8.63263,
      lat: 47.42173,
    },
  },
  {
    id: 2661362,
    name: 'Brütten',
    state: '',
    country: 'CH',
    coord: {
      lon: 8.67569,
      lat: 47.473179,
    },
  },
  {
    id: 2661363,
    name: 'Brüttelen',
    state: '',
    country: 'CH',
    coord: {
      lon: 7.14793,
      lat: 47.02269,
    },
  },
  {
    id: 2661365,
    name: 'Brusio',
    state: '',
    country: 'CH',
    coord: {
      lon: 10.12604,
      lat: 46.257671,
    },
  },
  {
    id: 2661367,
    name: 'Brunnenthal',
    state: '',
    country: 'CH',
    coord: {
      lon: 7.46857,
      lat: 47.08667,
    },
  },
  {
    id: 2661374,
    name: 'Brugg',
    state: '',
    country: 'CH',
    coord: {
      lon: 8.20869,
      lat: 47.480961,
    },
  },
]

const city = (state = cityD, { type, isDisabled, id }) => {
  switch (type) {
    case 'UPDATE_CITY':
      return state.map((city) =>
        id.includes(city.id) ? { ...city, isDisabled: isDisabled } : { ...city }
      )
    default:
      return state
  }
}

export default city
