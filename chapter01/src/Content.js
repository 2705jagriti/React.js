import React from 'react'

const Content = () => {
    const handleName = () => {
        const names = ["dave", "jagriti", "joy"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      };
  return (
    <main>
        <p>
            Hello { handleName() } 
        </p>
    </main>
  )
}

export default Content
