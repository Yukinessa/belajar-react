import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env

/**
 * @param {String} method 
 * @param {String} path 
 * @param {Object} data 
 */
const fetchAPI = async (method, path, data) => {
  try {
    const response = await axios({
      method,
      url: `${REACT_APP_BASE_URL}/${path}`,
      data,
      withCredentials: true
    })
    return response
  } catch (error) {
    throw error
  }
}

export default fetchAPI