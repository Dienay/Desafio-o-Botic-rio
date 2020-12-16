const useCashbackReturned = initialValues => {
    let cash = 0

    if(initialValues <= 1000) {
        cash = initialValues * 0.1
    } else if(initialValues > 1000 && initialValues < 1500) {
        cash = initialValues * 0.15
    } else {
        cash = initialValues * 0.2
    }

    return cash

}

export default useCashbackReturned
