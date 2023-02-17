const Child = (props) => {
  const tabOne = props.tabOne;
  console.log(props, tabOne);
  return (
    <div className="tab-list">
      {tabOne.map((tab) => (
        <div className="tab-preview" key={tab.id}>
          <h2>{tab.title}</h2>
          <p>Written by {tab.author}</p>
        </div>
      ))}
    </div>
  );
};
export default Child;
