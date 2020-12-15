const useConvertToCash = initialValues => {
    let result = parseFloat(initialValues).toFixed(2).replace('.',',')
    return result
 
}

export default useConvertToCash