# **Trending Topics Web Application**
This project is a simple web application built using HTML5, CSS3, and JavaScript that allows users to search for trending topics in a specific country. The application features a search bar for country input and displays trending topics relevant to that country in the results section.



### **Features**
- **Country-Specific Trending Topics**: Users can search for trending topics by entering a country name.
- **Dynamic Search Results**: Trending topics are displayed dynamically in the results section.
- **Responsive Design**: The layout adjusts to different screen sizes for a seamless user experience.



### **Technologies Used**
- **HTML5**: Provides the structure for the webpage.
- **CSS3**: Handles the styling and layout of the page.
- **JavaScript**: Implements the search functionality and handles user interactions.
- **Node.js**: Implements the server-side functionality.



### **Project Structure**

```
Trending-Topics-By-Country/
│
├── index.html       # Main HTML structure
├── styles.css       # CSS file for styling the page
├── app.js           # JavaScript file for search and result display functionality
├── server.js        # Node.js to implement server-side functionality
└── README.md        # Project documentation
```



### **Folder Structure**
- **index.html**: The main HTML file that includes the search bar and results container.
- **styles.css**: The CSS file that styles the layout, including the container, input, and button.
- **app.js**: Contains JavaScript logic for handling search input and displaying results dynamically.
- **Node.js**: Implements the server-side functionality.
- **README.md**: The project documentation you're currently reading.



### **How to Use**
1. Clone the repository:

```
git clone https://github.com/stephenombuya/Trendy-Topics-Web-APP
```

2. Navigate to the project directory:

```
cd trending-topics-by-country
```

3. Open the index.html file in a web browser:

```
open index.html
```

Alternatively, you can open the file directly from your code editor or browser.



### **Customization**
1. API Integration
This project is designed to work with an external API (e.g., Twitter API, Google Trends API) to fetch real-time trending topics. You can integrate any API by following these steps:

- **Set up your API**: Obtain an API key and integrate it into the app.js file where the API call will be made. Example:

```
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.example.com/trending/${country}?apikey=${apiKey}`;
```

- **Handle API Response**: Parse and display the trending topics dynamically in the #results div:

```
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.trends.forEach(trend => {
      output += `<p>${trend.name}</p>`;
    });
    document.getElementById('results').innerHTML = output;
  });
```

2. Modify Search Functionality
If you want to adjust the search behavior, you can modify the JavaScript in the app.js file:

```
document.getElementById('searchButton').addEventListener('click', () => {
  const country = document.getElementById('countryInput').value;
  searchTrendingTopics(country); // Call the function to fetch trending topics
});
```

3. CSS Customization
You can modify the layout, button styles, and typography by editing the styles.css file. Here’s an example of how you can style the search button:

```
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```



### **Future Enhancements**
- **Auto-Complete Search**: Add an auto-complete feature for the country input field to enhance user experience.
- **Loading Indicator**: Show a loading spinner while fetching trending topics from the API.
- **Error Handling**: Implement better error handling for incorrect or invalid country names.
- **Trending Source Options**: Allow users to select different sources (e.g., Twitter, Google, etc.) for trending topics.



### **Browser Support**
This project is compatible with modern web browsers such as Chrome, Firefox, Safari, and Edge.



### **Contributing**
Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository and submit a pull request. You can also open an issue if you find any bugs or have suggestions.



### **License**
This project is licensed under the  GNU GENERAL PUBLIC LICENSE. See the [LICENSE](https://github.com/stephenombuya/Trendy-Topics-Web-APP/blob/main/LICENSE) file for more details.
