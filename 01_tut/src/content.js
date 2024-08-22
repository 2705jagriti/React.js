const content = () => {
    const handlenames = () => {
        const names = ["bobby", " jay ", "kenny"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
  return (
    <div>
    <p>hello {handlenames()} !</p>
    </div>
  )
}

export default content
