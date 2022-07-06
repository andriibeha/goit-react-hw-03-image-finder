import axios from "axios";

async function getImage() { 
    const apiKey = "27740516-006db8c520e637ee9ea683b0c";
    const url = `https://pixabay.com/api/?q=cat&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`

    try { 
      await fetch(url)
        .then(response => (response.json()))
        .then(data => (console.log("data",data)))
    } catch (error) { 
      console.log(error)
    }
  
  
    /* try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    } */
        
};

export default getImage;
