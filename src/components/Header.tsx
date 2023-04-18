import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header"><h1>PHOTO<span className="bold">SEARCH</span></h1><span>powered by Flickr</span></div>
  )
}

export default Header