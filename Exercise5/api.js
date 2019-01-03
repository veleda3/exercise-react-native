const getRemoteData = async (url) => {
  const rawResponse = await fetch(url)
    return rawResponse.json()
}

export const getPeople = () => {
  const url = 'https://swapi.co/api/people';
  return getRemoteData(url);
};

export const storeData = async (response) => {
  console.log(JSON.stringify(response))
  try {
    await AsyncStorage.setItem('https://swapi.co/api/people', JSON.stringify(response));
  } catch (error) {
    console.log(error)
  }
}

export const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('https://swapi.co/api/people');
    if (value !== null) {
      return value
    }
   } catch (error) {
     console.log(error)
   }
}