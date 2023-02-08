import PropTypes from 'prop-types'


Profile.defaultProps = {
  version: '16',
}
function Profile(props) {
  function handleName(fullName) {
    alert(fullName)
  }
  const { fullName, bio, profession } = props
  return (
    <div>
      <h1>{fullName}</h1>
      <h2>Default version{props.version}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      {props.children}
      <button onClick={() => handleName(fullName)}>Click Me!</button>
    </div>
  )
}
Profile.propTypes = {
  fullName: PropTypes.string,
}

export default Profile
