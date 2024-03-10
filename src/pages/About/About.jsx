import "./About.css";

const About = () => {
  return (
    <div className="aboutDiv">
      <div className="box1">
        <span className="box1span">About Me</span>
      </div>
      <div className="box2">
        <div className="box2first">
          <img
            src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png"
            alt=""
          />
        </div>
        <div className="box2second">
          Hey, I'm ChetanKumar Banjara, a frontend developer who's all about
          crafting visually appealing and user-friendly websites. With a knack
          for turning ideas into pixel-perfect designs using HTML, CSS, and
          JavaScript, I create seamless online experiences that work across
          devices. Always eager to explore the latest tech trends, I bring a
          dynamic and collaborative spirit to the table, making teamwork an
          essential part of my coding journey. With 3 Month in the field, I'm
          not just a coder; I'm a digital storyteller passionate about
          transforming visions into captivating online realities. Let's connect
          and bring your digital projects to life!
        </div>
      </div>
    </div>
  );
};
export default About;
