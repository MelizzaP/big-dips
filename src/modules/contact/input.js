import React from 'react'
import proptypes from 'proptypes'
import { ifElse, flip, includes, path, pipe } from 'ramda'

export default function Input({ copy, type, id, name, cols, rows, onChange, value }) {
  const Elem = elementForForm(type)
  const handleUpdate = pipe(path(['target', 'value']), onChange)
  return (
    <label htmlFor={id} className="flex flex-col gap-y-3">
      <span>{`${copy}:`}</span>
      <Elem className="text-black" {...{ name, id, type, cols, rows, onChange: handleUpdate }} />
    </label>
  )
}

// PRIVATE

const inputFormTypes = ['email', 'text']
const elementForForm = ifElse(
  flip(includes)(inputFormTypes),
  () => 'input',
  () => 'textarea'
)

Input.propTypes = {
  id: proptypes.string.isRequired,
  copy: proptypes.string.isRequired,
  type: proptypes.string.isRequired,
  name: proptypes.string.isRequired,
  cols: proptypes.number,
  rows: proptypes.number,
  onChange: proptypes.func.isRequired,
  value: proptypes.string.isRequired,
}
