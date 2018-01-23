import axios from 'axios';
import moment from 'moment/moment';
import config from '../../config/config'

let ax = axios.create({
  baseURL: `${config.baseUrl}:${config.port}/api/ussd/`
})

// TODO demonstrates how to call an external API
const getDispatchInfoViaProxy = (gin) => ax.get(`dispatch?gin=${gin}`).then(axiosResponse => axiosResponse.data);

const getDispatchInfo = (gin) => {
  let itemType = ['Wheat', 'Duket', 'Furno', 'Fafa', 'Endomi', 'Wetet'][gin];
  itemType = itemType || 'Wheat';
  return {
    bags: gin + 1,
    kg: gin * 100,
    itemType,
    date: moment().subtract(gin, 'days').calendar(),
    truckPlateNumber: `${gin}-38765`,
  };
};

const receive = (val) => ax.post('received', {val}).then(response => response.data)

export default { getDispatchInfoViaProxy, getDispatchInfo };
