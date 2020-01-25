import React from 'react'
import Menu from 'part:@sanity/components/menus/default'

/**
 * Couple of things to note:
 * - width and height is set to 1em
 * - fill is `currentColor` - this will ensure that the icon looks uniform and
 *   that the hover/active state works. You can of course render anything you
 *   would like here, but for plugins that are to be used in more than one
 *   studio, we suggest these rules are followed
 **/

const handleMenuItemClick = () => console.log('bop!')
const handleMenuClose = () => console.log('bop!')
export default () => (<Menu
  onAction={handleMenuItemClick}
  items={[{
    test: 'test'
  }]}
  opened
  origin='top-right'
  onClickOutside={handleMenuClose}
                      />)
