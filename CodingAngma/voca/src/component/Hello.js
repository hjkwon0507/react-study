const Hello = () => {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={()=>{
        showAge(30);
        }}
      >Show age
      </button>
      <input 
        type="text" 
        onChange={e => {
          console.log(e.target.value);
        }} 
      />
    </div>
  )
};

export default Hello;