import '../styles/Utils.css'

interface propTextBox {
  placeholder: string
  getData?: Function
  textType?: string
}
function TextBox ({ placeholder, getData, textType }: propTextBox) {
  const saveData = (event: any) => {
    if (getData !== undefined) {
      getData(event.target.value)
    } else {
      console.log('hizo un clic')
    }
  }
  return (
    <input
      className='textbox'
      onChange={saveData}
      type={(textType !== undefined) ? textType : 'text'}
      placeholder={placeholder}
    />
  )
}
export default TextBox
