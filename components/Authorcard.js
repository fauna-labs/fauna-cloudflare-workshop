const authorStyel = {
  display: 'flex',
  padding: '0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px'
}

const authorStyel2 = {
  display: 'flex',
}

export default function AuthorCard() {
  return (
    <div style={authorStyel2}>
      <a href="https://www.linkedin.com/in/shadid-haque/">
      <div style={authorStyel}>
        <img 
          src="https://pbs.twimg.com/profile_images/1471016660521963523/oRQQk1ra_400x400.jpg" alt="Shadid"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
      </div>
      </a>

      <a href="https://github.com/zeekhoo">
      <div style={authorStyel}>
        <img 
          src="https://avatars.githubusercontent.com/u/10700898?v=4" alt="Zee"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
      </div>
      </a>

      <a href="https://github.com/YuliyaPetru">
      <div style={authorStyel}>
        <img 
          src="https://avatars.githubusercontent.com/u/111592230?v=4" alt="yuliya petru"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
      </div>
      </a>

      <a href="https://twitter.com/luiscolon1">
      <div style={authorStyel}>
        <img 
          src="https://pbs.twimg.com/profile_images/1615587816658055168/spGlTr85_400x400.jpg" alt="Luis"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
      </div>
      </a>

      <a href="https://github.com/mmailaender">
      <div style={authorStyel}>
        <img 
          src="https://avatars.githubusercontent.com/u/87228994?v=4" alt="Luis"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
      </div>
      </a>

    </div>
  )
}