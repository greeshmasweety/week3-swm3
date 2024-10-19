import Navbar from "../components/Navbar"
import Cards from "../components/Cards"
import { useEffect } from "react"
import axios from "axios";
import { useState } from "react";


export default function MarketPlace() {

    const RANGE = "B1:D";
    const SHEET_ID = "1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg";
    const API_KEY = "AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8";

    const [list, setList] = useState([])

    useEffect(() => {
        getMarketPlaceData()
    }, [])

    const getMarketPlaceData = async () => {
        const response = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        setList(response.data.values.slice(2));

        const sheetData = response.data.values;

    }



    return (
        <div>
            <Navbar />
            <img src="https://images.olx.com.pk/thumbnails/437508562-800x600.webp" alt="" className="w-full h-40 object-contain" />


            <div className=" flex  flex-wrap mb-32">

            {list.map((item, index) => (
                    <Cards key={index} category={item[1]} title={item[0]} img={item[2]} />
                ))}


            </div>




        </div >

    )
}