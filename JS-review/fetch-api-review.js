/*
==============================
Fetch API Review Activity (Summary)
==============================

Overview:
- async/await: Async/await is a modern JavaScript feature used to work with asynchronous code more conveniently. It simplifies the syntax and improves the readability of 
code that involves asynchronous operations, such as fetching data from an API.

- Fetch API: The Fetch API is a modern interface for making network requests in the browser. It provides a more powerful and flexible way to fetch resources, including 
making HTTP requests and handling responses.

How they work together:
- The `fetchDogImage` function is declared as asynchronous (async), indicating that it contains asynchronous operations. Inside this function, the `await` keyword is 
used to pause the execution and wait for the completion of the asynchronous `fetch` operation, which fetches a random dog image from the Dog CEO's Dog API.

- The `updateDogImage` function is a helper function that takes the fetched dog image URL and updates the HTML content to display the image.

- The event listener on the "Fetch a Dog" button (`fetchDogBtn`) triggers the asynchronous `fetchDogImage` function when clicked. The `await` keyword is used to wait for 
the completion of the fetch operation, and once the image URL is obtained, the `updateDogImage` function is called to update the HTML with the fetched dog image.

*/

// Function to fetch a random dog image from the Dog CEO's Dog API
async function fetchDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error('Failed to fetch dog image');
      }
  
      const data = await response.json();
      return data.message; // Return the URL of the dog image
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
  
  // Function to update the HTML with the fetched dog image
  function updateDogImage(dogImageURL) {
    const dogContainer = document.getElementById('dogContainer');
    dogContainer.innerHTML = `<img src="${dogImageURL}" alt="Random Dog">`;
  }
  
  // Event listener for the Fetch Dog button
  const fetchDogBtn = document.getElementById('fetchDogBtn');
  fetchDogBtn.addEventListener('click', async () => {
    try {
      const dogImageURL = await fetchDogImage();
      updateDogImage(dogImageURL);
    } catch (error) {
      console.error('Error fetching dog image:', error.message);
    }
  });
  
  // Function to perform a POST request to JSONPlaceholder
  async function postData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Post',
          body: 'This is the body of the new post.',
          userId: 1,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
  
      const data = await response.json();
      return data; // Return the result of the POST request
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
  
  // Function to update the HTML with the result of the POST request
  function updatePostResult(result) {
    const postDataResult = document.getElementById('postDataResult');
    postDataResult.textContent = `POST Request Result: ${JSON.stringify(result)}`;
  }


  // Event listener for the Post Data button
const postDataBtn = document.getElementById('postDataBtn');
postDataBtn.addEventListener('click', async () => {
  try {
    const result = await postData();
    updatePostResult(result);
  } catch (error) {
    console.error('Error posting data:', error.message);
  }
});
  
  