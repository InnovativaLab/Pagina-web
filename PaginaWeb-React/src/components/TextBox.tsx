import '../styles/Utils.css'

interface propTextBox {
  placeholder: string
  getData?: Function
  textType?: string
  defaultValue?: string|number
}
function TextBox ({ placeholder, getData, textType,defaultValue="" }: propTextBox) {
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
      value={defaultValue}
    />
  )
}
export default TextBox
