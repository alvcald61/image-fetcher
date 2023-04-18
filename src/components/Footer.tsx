import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-left">
                <p>PhotoSearch</p>
                <p> Powered by Flickr</p>
            </div>
            <div className="footer-right">
                <p>Created by Alvaro Calderon</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer