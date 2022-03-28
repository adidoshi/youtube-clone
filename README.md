# YoutTube Clone

## Tech Stack Used -

- FrontEnd: ReactJs
- Redux for application state management
- Styling: SASS (preprocessor scripting language that is compiled into CSS.)
- Google O authentication with firebase
- Youtube API V3 for endpoint requests.

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>

### Deployment on firebase.

### Functionalities -

#### User Authentication:

- Google OAuth firebase

#### Youtube API V3

- Youtube home screen where most viewed & popular videos from IN region are beign fetched.

![image info](./src/assets/1.png)

- Watchscreen for playing the actual video.

![image info](./src/assets/3.png)

- Related videos fetched besides the actual play vid.
- Channel Subscriptions page of the user.
- POST comment on the video by actual google user id.
- 
- Channel Page & videos of that respective channel fetched on that page.

![image info](./src/assets/2.png)

### Lazy loading & skeleton screen

- Lazy loading is a way to dramatically decreasing initial loading time to clients.
- Loading only the first 12 cards from the array list & when user scrolls, the other cards load then.
- Also till the image is loaded completely till that time we show skeleton custom component for better user experience & less initial time which actually increases the web performance of web app when scaled.

![image info](./src/assets/0.png)
