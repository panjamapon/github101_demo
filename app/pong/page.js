import Template from "../components/template";
const Pong = ()=> {
  const image = "https://obs.line-scdn.net/0huKZUULp6KmRnLAWf6N5VM116KQtUQDlnAxp7ZztCdFBCFD87WBphCkQlJAdLS206CR9mA0QvMVVNSWRiU0Jh/w644";
  const name = "Pong"
  return (
    <div>
      <Template image={image} name={name}/>
    </div>
  )
}
export default Pong;