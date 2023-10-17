import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let’s work together</h1>
        <div className="item">
          <h2>Mail</h2> <span>alemank23k@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>{" "}
          <span>Argentina, Formosa, General Manuel Belgrano</span>
        </div>
        <div className="item">
          <h2>Phone</h2> <span>+54 3704-678598</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8}></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
