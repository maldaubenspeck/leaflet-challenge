# leaflet-challenge

# The Challenge
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# The Process

The process involved in tackling this challenge comprised two main components: obtaining the earthquake dataset and developing a meaningful visualization. To acquire the dataset, the USGS GeoJSON Feed page was utilized, offering a variety of earthquake datasets updated every 5 minutes. The chosen dataset "M1.0+ Earthquakes Earthquakes from the Past 7 Days," provided a JSON representation of the data, which was then pulled into the visualization tool using its URL.

The visualization itself was accomplished using Leaflet, a JavaScript library for interactive maps. Each earthquake was plotted on the map based on its longitude and latitude, with the size of the data markers representing the magnitude and the color indicating the depth of the earthquake. To enhance user interaction, popups were implemented, providing additional information about each earthquake upon clicking a corresponding marker. Furthermore, a legend was incorporated to offer context to the map data, helping users interpret the significance of marker size and color.

# What’s Included?
The deliverables for this project include HTML and JavaScript files, with the HTML file serving as the entry point for running the analysis. The JavaScript code utilizes the Leaflet library to create an interactive map, fetching and visualizing earthquake data obtained from the USGS GeoJSON Feed. The resulting map incorporates markers with varying sizes and colors, indicating the magnitude and depth of earthquakes, respectively. Additionally, pop ups provide detailed information when interacting with the markers, while a legend offers a reference guide for interpreting the displayed data. The modular structure of the code allows for adaptability, enabling future enhancements or customization as needed by the USGS.

# Sources
For this challenge I utilized ChatGPT, VisualStudio, JavaScript, Plotly, Google/Google Chrome and the site https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php.
