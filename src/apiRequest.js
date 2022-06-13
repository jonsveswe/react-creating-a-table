const apiRequest = async(url = '', optionsObject=null, errorMsg = null) => {
    try {
        const response = await fetch(url, optionsObject);
        if (!response.ok) throw Error('Please reload the app');
    } catch (error) {
        errorMsg = error.message;
    } finally{
        return errorMsg;
    }
}

export default apiRequest;