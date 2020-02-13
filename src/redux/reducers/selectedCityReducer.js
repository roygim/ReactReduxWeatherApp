import { SELECTED_CITY } from "../actions/types";

const initialState = {
  selectedCity: null
}

export default function(state = initialState, action) {
  switch(action.type){
    case SELECTED_CITY:
      return {
        ...state,
        selectedCity: getCityData(action.payload)
      };
    default:
      return state;
  }
}

function getCityData(res){
  let cityData = {};

  cityData.cityDetails = {}
  cityData.cityDetails.id = res.cityId;
  cityData.cityDetails.name = res.cityName;
  cityData.cityDetails.degrees = res.DailyForecasts[0].Temperature.Maximum.Value;
  cityData.cityDetails.dayWeather = res.DailyForecasts[0].Day.IconPhrase;
  cityData.cityDetails.img = res.Images[0].Photos[0].LandscapeLink.replace('L.jpg', 'S.jpg');
  
  cityData.cityDetails.images = []

  res.Images[0].Photos.forEach((element, index) => {
    let img = {}
    img.id = index;
    img.src = element.LandscapeLink.replace('L.jpg', 'S.jpg');
    cityData.cityDetails.images.push(img);
  })
    
  cityData.weeklyWeather = []

  res.DailyForecasts.forEach((element, index) => {
    let day = {}
    day.id = index;
    day.day = getDayStr(element.Date);
    day.degrees = element.Temperature.Maximum.Value;
    cityData.weeklyWeather.push(day);
  });

  return cityData;
}

function getDayStr(val) {
  var d = new Date(val);

  switch(d.getDay()){
    case 0:
      return 'Sun'
    case 1:
      return 'Mon'
    case 2:
      return 'Tue'
    case 3:
      return 'Wed'
    case 4:
      return 'Thu'
    case 5:
      return 'Fri'
    case 6:
      return 'Sat'
    default:
      return '';
  }
}