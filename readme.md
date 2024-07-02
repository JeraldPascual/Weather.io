# Weather App

The Weather App is a web application that retrieves and displays real-time weather data using the WeatherAPI. It provides current weather conditions for selected cities, offering interactive city selection, detailed weather information, and dynamic background updates based on weather conditions and time of day.

## Features

- **Current Weather Display:** Shows temperature, weather condition, city name, date, and time.
- **Interactive City Selection:** Users can click on predefined city names to fetch weather data.
- **Weather Details:** Additional information includes cloud cover, humidity, and wind speed.
- **Dynamic Backgrounds:** Background images change based on weather conditions and time of day.
- **GSAP Animations:** Utilizes GSAP for smooth animations on page load.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- WeatherAPI

## Installation

No installation is required. Simply open `index.html` in a web browser to run the application.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git

2. Open index.html in your web browser.

### Usage
Enter a city name in the search input or click on a predefined city to fetch weather data.
Enjoy real-time updates of weather information and dynamic backgrounds based on weather conditions.


## GSAP Animation

The h3.brand element in the header is animated using GSAP to provide a visually appealing introduction to the application. It features a slide-in effect from the left with a fade-in transition and a neon blinking effect using text shadow.

```
// Example GSAP animation code
import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js";

// Function to animate the brand element
export function animateBrand() {
  gsap.fromTo(
    ".brand",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
  );

  gsap.to(".brand", {
    textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(255, 255, 255, 0.4)",
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power1.inOut",
  });
}
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or feedback, feel free to contact me:

- **Email:** jpascual.ccsjdmshs@gmail.com
- **Facebook:** [Jerald Pascual](https://web.facebook.com/JeraldAnthoniOlinPascual)
- **GitHub:** [JeraldPascual](https://github.com/JeraldPascual)


## Acknowledgments
WeatherAPI: For providing real-time weather data.
GSAP: For smooth and powerful JavaScript animations.
Youtube: QuickCodingTuts for open-source tutorial.
