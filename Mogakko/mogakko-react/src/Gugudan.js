function Gugudan({number}){
  const num = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      {num.map((n)=>(
        <p>
          {number}*{n}={number*n}
        </p>
      ))}
    </div>
  )
}

export default Gugudan;