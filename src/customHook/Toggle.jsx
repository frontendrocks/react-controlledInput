import useToggle from './customHookToggle';

const Toggle = () => {
  const {show, toggleHideShow} = useToggle(false)
    // useEffect(toggleHideShow(), [])
  return (
      <div>
      {show && <h3>Hey Toggle playing111</h3>}
      <button onClick={toggleHideShow}>Click to Hide/Show</button>
    </div>
  )
}

export default Toggle
