import React from 'react'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from './MyTool.css'

class MyTool extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p>This is a blank slate for you to build on.</p>
        <p>Tools are just React components!</p>
      </div>
    )
  }
}

export default MyTool
