export function UserDetails(props) {
    const { name, years, onYearChange } = props;
  
    function handleButtonClick() {
      onYearChange(years + 1);
    }
  
    return (
      <div>
        <h2>{name}</h2>
        <p>{years} godina</p>
        <button onClick={handleButtonClick}>Promijeni godine</button>
      </div>
    );
  }