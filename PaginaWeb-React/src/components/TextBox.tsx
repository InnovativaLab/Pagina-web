import '../styles/Utils.css'

interface propTextBox{
  placeholder: string
}
function TextBox ({ placeholder }: propTextBox) {
  return (
    <input className='textbox' type='text' placeholder={placeholder} />
  )
}
export default TextBox
