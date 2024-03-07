import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [beerName, setBeerName] = useState("");

  const per_page = 10;


  const fetchApi = async (page, per_page, beer_name) => {
    try {
      const beer_name_search = beerName !== '' ? `&beer_name=${beer_name}` : "";
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}${beer_name_search}`);
      if (response.data) {
        let beerdata = response.data
        console.log(beerdata);
        setProducts(beerdata);
      }
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi(page, per_page, beerName);
  }, [page, beerName]);
  return (
    <>
      {products.length > 0 && (
        <div className="home">
            <div className="text-center mb-2">
                <label htmlFor="page">Page: </label>
                <select name="page" id="page" onChange={(e)=> setPage(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="text-center mb-2">
            <input className="border rounded h-[35px] w-[20%]" type="text" placeholder="🔍Search" onChange={(e)=> {
                setBeerName(e.target.value)
            }} />
            </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-full flex items-center border-2 rounded-xl py-2 "
              >
                <div className="w-1/2 flex justify-center">
                  <img
                    className="h-[100px]"
                    src={product.image_url}
                    alt={product.name}
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="font-semibold">{product.name}</h1>
                  <p> {product.tagline} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
