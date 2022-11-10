export const setSaveFile = async (req, res) => {
  try {
    console.log("Se guardo el archivo")
    res.send("Ok")
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}