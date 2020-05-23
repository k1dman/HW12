import React from 'react'
import Markdown from 'markdown-to-jsx'

const Reptext = (props) => {
  return <Markdown>{props.repository}</Markdown>
}

Reptext.propTypes = {}

export default Reptext
