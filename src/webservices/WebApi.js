import instance from './AxiosInterceptor';

export default function get(url, formData) {
  return instance
    .get(url, formData)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
