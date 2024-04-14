import Card from "./components/Card";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      {/* <h1 className="text-2xl text-blue-500">Hello world!</h1> */}
      <div className="mt-10 px-20 flex flex-col">
        <h1 className="text-lg font-semibold mb-3">Recent blog posts</h1>
        <div className="grid grid-cols-4 gap-6 w-full">
          <Card
            image="/demo.jpg"
            title="The Art of Mindful Living: Cultivating Serenity in a Busy World"
            desc="Immerse yourself in the art of mindful living as we explore techniques to cultivate serenity and inner peace amidst the chaos of everyday life. "
            profile="/p.jpg"
            name="John Doe"
          />
          <Card
            image="https://img.freepik.com/free-photo/charming-tender-curly-woman-smiles-gladfully-looks-aside-wears-casual-clothes-stands-against-yellow-studio-wall_273609-34577.jpg?t=st=1713118621~exp=1713122221~hmac=dd3526ca953ee513c8491836247be40915e0ca9d3cf497721cbbb0e96d8dcc61"
            title="Mastering Productivity: Unlocking Your Full Potential"
            desc=" Dive into the world of productivity and discover practical strategies to maximize your efficiency and unlock your full potential."
            profile="https://www.shutterstock.com/image-photo/young-hispanic-man-wearing-blue-600w-2214648345.jpg"
            name="John Doe"
          />
          <Card
            image="https://img.freepik.com/free-photo/pissed-off-annoyed-man-screams-angrily-keeps-palm-raised-stares-smartphone-being-outraged-after-rough-conversation-wears-round-spectacles-casual-black-t-shirt-isolated-white-background_273609-61323.jpg?t=st=1713118692~exp=1713122292~hmac=d61bf39aafe2b70884971b272c94b5ef10bcbfda31bec4f0c6006c02a0e45180"
            title="The Power of Minimalism: Simplify, Thrive."
            desc="Explore the transformative benefits of minimalism as we unlock the secrets to simplifying your life and unlocking true fulfillment. "
            profile="https://avatar.cdnpk.net/default_04.png"
            name="waystudio"
          />
          <Card
            image="https://img.freepik.com/free-photo/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying_273609-26983.jpg?t=st=1713119054~exp=1713122654~hmac=e7d5972c76bf7225a5e11380858a0553175cf367baa63bebdbf410d7d776fb1d"
            title="Pleasant looking Afro American woman holds notepads."
            desc="Pleasant looking Afro American woman holds notepads, papers, studies at college, glad to finish studying"
            profile="https://avatar.cdnpk.net/default_04.png"
            name="waystudio"
          />

          <Card
            image="https://img.freepik.com/free-photo/charming-tender-curly-woman-smiles-gladfully-looks-aside-wears-casual-clothes-stands-against-yellow-studio-wall_273609-34577.jpg?t=st=1713118621~exp=1713122221~hmac=dd3526ca953ee513c8491836247be40915e0ca9d3cf497721cbbb0e96d8dcc61"
            title="Mastering Productivity: Unlocking Your Full Potential"
            desc=" Dive into the world of productivity and discover practical strategies to maximize your efficiency and unlock your full potential."
            profile="https://www.shutterstock.com/image-photo/young-hispanic-man-wearing-blue-600w-2214648345.jpg"
            name="John Doe"
          />
          <Card
            image="https://img.freepik.com/free-photo/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying_273609-26983.jpg?t=st=1713119054~exp=1713122654~hmac=e7d5972c76bf7225a5e11380858a0553175cf367baa63bebdbf410d7d776fb1d"
            title="Pleasant looking Afro American woman holds notepads."
            desc="Pleasant looking Afro American woman holds notepads, papers, studies at college, glad to finish studying"
            profile="https://avatar.cdnpk.net/default_04.png"
            name="waystudio"
          />
          <Card
            image="https://img.freepik.com/free-photo/pissed-off-annoyed-man-screams-angrily-keeps-palm-raised-stares-smartphone-being-outraged-after-rough-conversation-wears-round-spectacles-casual-black-t-shirt-isolated-white-background_273609-61323.jpg?t=st=1713118692~exp=1713122292~hmac=d61bf39aafe2b70884971b272c94b5ef10bcbfda31bec4f0c6006c02a0e45180"
            title="The Power of Minimalism: Simplify, Thrive."
            desc="Explore the transformative benefits of minimalism as we unlock the secrets to simplifying your life and unlocking true fulfillment. "
            profile="https://avatar.cdnpk.net/default_04.png"
            name="waystudio"
          />
          <Card
            image="/demo.jpg"
            title="The Art of Mindful Living: Cultivating Serenity in a Busy World"
            desc="Immerse yourself in the art of mindful living as we explore techniques to cultivate serenity and inner peace amidst the chaos of everyday life. "
            profile="/p.jpg"
            name="John Doe"
          />
        </div>
        {/* <Login /> */}
        {/* <SignUp /> */}
      </div>
    </div>
  );
}

export default App;
