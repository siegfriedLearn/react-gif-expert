export  const getGifs  = async  (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category } &limit=10&api_key=wJkT5Y3UQF2NyHn7Jn0JEDxBrtyhCJvK`
    const resp  = await fetch(url);
    const {data} =  await resp.json();
    const gifs= data.map(img=> ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }) )
    //console.log(gifs);
    return gifs;
}