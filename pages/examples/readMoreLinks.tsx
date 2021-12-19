const ReadMoreLinks = () => {
  let allLinks = [];
  for (let i = 0; i < 20; i++) {
    allLinks.push(<a href="/">Les mer</a>);
  }
  return <>{allLinks}</>;
};

export default ReadMoreLinks;
