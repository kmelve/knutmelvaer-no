import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'
import Button from 'part:@sanity/components/buttons/default'
import Webcam from 'react-webcam'

function WebcamSource (props) {
  const [imageSrc, setImageSrc] = React.useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot()
      setImageSrc(imageSrc)
    }, [webcamRef]
  )
  const imageData = {
    kind: 'base64',
    value: imageSrc,
    options: {
      originalFilename: `webcam-photo-${new Date().toISOString()}.jpeg`
    }
  }
  const select = () => props.onSelect([imageData])

  return (
    <Dialog title='Take a photo' onClose={props.handleClose} isOpen>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat='image/jpeg'
        height={720}
        width={1280}
      />
      <Button onClick={capture}>Take photo!</Button>
      <Button onClick={select}>Use photo!</Button>
      {
        imageSrc && <img src={imageSrc} />
      }

    </Dialog>)
}
export default WebcamSource
