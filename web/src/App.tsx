interface IProps{
  title?:string
}
function Button(props:IProps){
  return <p>{props.title ? 'Default': '0'}</p>
}
function App() {


  return (
    <>
<Button title="Jorge"/>
<Button />
</>
    
  )
}

export default App
