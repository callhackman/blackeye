// This script makes an HTTP GET request with a custom 'bypass-tunnel-reminder' header

fetch('https://example.com/api', {
  method: 'GET',
  headers: {
    'bypass-tunnel-reminder': 'anyValue'
  }
})
.then(response => response.json())
.then(data => console.log('Response Data:', data))
.catch(error => console.error('Error:', error));
