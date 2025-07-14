const axios = require('axios');

async function testFetch() {
  try {
    const res = await axios.get('https://api.exchangeratesapi.io/v1/latest', {
      params: {
        access_key: "563ab2de98f8176f9b0538ac67c2181e",
        from: 'GBP',
        to: 'USD',
        amount: 100
      }
    });
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching exchange rate:', error.message);
  }
}

testFetch();
