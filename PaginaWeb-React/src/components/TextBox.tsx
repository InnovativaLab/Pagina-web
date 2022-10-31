import '../styles/Utils.css'

interface propTextBox {
  placeholder: string
  getData?: Function
  textType?: string
}
function TextBox ({ placeholder, getData, textType }: propTextBox) {
  return (
    <input
      className='textbox' onChange={
      (event) => {
        if (getData !== undefined) {
          getData(event.target.value)
        } else {
          console.log('hizo un clic')
        }
      }
} type={(textType !== undefined) ? textType : 'text'} placeholder={placeholder}
    />
  )
}
export default TextBox
