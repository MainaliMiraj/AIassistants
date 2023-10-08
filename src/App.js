import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                alt="Alexa Image"
                description="Alexa is a virtual voice-activated assistant developed by Amazon. It is primarily known for its presence in Amazon Echo smart speakers and other compatible devices. Alexa can perform various tasks, such as answering questions, setting reminders, playing music, controlling smart home devices, and providing weather updates, all through natural language voice commands. It uses cloud-based artificial intelligence to understand and respond to user queries, making it a popular choice for home automation and hands-free convenience."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                alt="CortanaImage"
                description="Cortana is a virtual assistant developed by Microsoft. It was initially introduced as part of the Windows operating system and later extended to other Microsoft products and platforms. Cortana can perform tasks like answering questions, setting reminders, sending emails, and providing personalized recommendations. While it was once prominent in Microsoft's ecosystem, its functionality has been scaled back in recent years, with a focus primarily on enterprise applications and integration with Microsoft 365 services."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                alt={SiriImage}
                description="Siri is a virtual voice-activated assistant developed by Apple. It is integrated into Apple's ecosystem, including iOS devices like iPhones, iPads, and Mac computers. Siri can perform a wide range of tasks, such as sending messages, making calls, setting reminders, providing weather forecasts, and controlling smart home devices, all through natural language voice commands. Siri leverages machine learning and artificial intelligence to understand and respond to user queries, making it a key feature for Apple users seeking voice-based assistance."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
