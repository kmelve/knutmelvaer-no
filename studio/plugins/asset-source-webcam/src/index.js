import Webcam from './Webcam'

export default {
  name: 'webcam', // Unique source name
  title: 'Webcam', // Title displayed in lists, buttons etc
  component: Webcam, // Selection component
  icon: () => '📷' // Icon for lists, buttons etc.
}
