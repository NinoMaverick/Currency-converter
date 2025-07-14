const axios = require('axios');

async function testFrankfurterAPI() {
  try {
    const response = await axios.get('https://api.frankfurter.app/latest', {
      params: {
        from: 'GBP',
        to: 'EUR'
      }
    });

    console.log('Status:', response.status);  
    console.log('Data:', response.data);      // The exchange rates and info

  } catch (error) {
    console.error('API test failed:', error.message);
  }
}

testFrankfurterAPI();
