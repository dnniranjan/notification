const Notification = (props) => {
  const { content, url, contClass } = props;

  return (
    <div className={contClass}>
      <img className="image" src={url} />
      <p className="text">{content}</p>
    </div>
  );
};

const element = (
  <div className="main">
    <div className="main">
      <h1 className="heading">Notifications</h1>
      <div>
        <Notification
          content="Information Message"
          url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          contClass="information"
        />
        <Notification
          content="Success Message"
          url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          contClass="success"
        />
        <Notification
          content="Warning Message"
          url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          contClass="warning"
        />
        <Notification
          content="Danger Message"
          url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          contClass="danger"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
