export const useHandleError = (error) => {
  const errorMessage = error.data.message

  if (!!errorMessage) {
    // TODO:Toast Add error toast here
    alert(errorMessage)
  }
}
