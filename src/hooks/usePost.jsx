export default function usePost(){
    const postData = async (url, postData) => {
        try{
            const reqConfig = {
                method: 'POST',
                headers: {"Content-Type": "application/JSON"},
                body: JSON.stringify(postData)
            }
            const response = await fetch(url, reqConfig);
    
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
        }catch(err){
            console.error(err);
        }
    }

    return {postData}
}