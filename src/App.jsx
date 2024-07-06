import {React,useEffect,useState} from "react";
import AddBookmarkForm from "./components/AddBookmarkForm";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { RiEdit2Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import DateAndTime from "./components/DateAndTime";
import { DiVim } from "react-icons/di";
const getLocalStorgaeItem = ()=>{
  let list = localStorage.getItem('linkItems')
  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
}
export default function App() {
  const [linkItems, setLinkItems] = useState(getLocalStorgaeItem());
  const [linkItem,setLinkItem] = useState({
    url: 'https://',
    title: ''
})
  const [showBookmarkForm,setShowBookmarkForm] = useState(true)
  const [show,setShow] = useState(true)
  const [editing,setEditing] = useState(false)
  const [editingItem,setEditingItem] = useState(null)
  const [editMode,setEditMode] = useState(false)
  const [darkMode,setDarkMode] = useState(false)
//using local storage
  useEffect(()=>{
    localStorage.setItem('linkItems',JSON.stringify(linkItems))
  },[linkItems])

  
  // useEffect(()=>{
  //     console.log(linkItems)
  // },[linkItems])

  const handleClick = ()=>{
    setShowBookmarkForm(false)
    setEditing(false)
    setLinkItem({url:'http://',title: ''})
  }
  const handleCancelClick=()=>{
    setShowBookmarkForm(true)
  }
  const showDelete = ()=>{
    setShow(!show)
    setEditMode(!editMode)
  }
  const handleDelete = (index)=>{
    const updatedLinkItems = linkItems.filter((_,i)=>i !== index)
    setLinkItems(updatedLinkItems);
  }
  const handleEdit = (index)=>{
    let newEditItem = linkItems.find((item,i)=>{
      if(index===i){
        return item;
      }
    })
    setShowBookmarkForm(false)
    setEditing(true)
    setLinkItem(newEditItem)
    setEditingItem(index)

  }
  return (
    <div className={`${darkMode?'dark':''}`}>
      <div className="bg-[#ebebeb] dark:bg-[#2c2c2c]">
        <div className="mx-20 h-screen">
          <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
          <div className=" flex flex-col items-center justify-center ">
            {/* <img className="h-32 w-32" src={luffy} alt="strawhat logo" /> */}
            <svg className=" fill-black dark:fill-gray-300" version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="200pt" height="80pt" viewBox="95 180 550 80"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,466.000000) scale(0.100000,-0.100000)"
            stroke="none">
            <path d="M1085 3246 c-13 -13 -27 -36 -31 -50 -3 -14 -12 -26 -19 -26 -8 0
            -27 -12 -44 -26 -26 -21 -31 -33 -31 -68 0 -69 55 -112 128 -100 35 5 40 2
            102 -61 59 -60 63 -67 48 -79 -10 -7 -18 -16 -18 -18 0 -3 -16 -32 -35 -64
            -38 -63 -85 -197 -85 -243 0 -23 -8 -31 -50 -51 -27 -13 -50 -27 -50 -31 0 -8
            36 -19 66 -19 19 0 22 -8 29 -67 12 -111 52 -226 109 -311 l29 -43 -53 -54
            -54 -54 -57 6 c-55 5 -59 4 -88 -25 -56 -56 -33 -149 41 -167 16 -4 28 -17 34
            -37 6 -20 21 -38 43 -49 27 -15 31 -20 18 -25 -27 -10 -20 -22 16 -26 27 -3
            33 -8 35 -31 2 -20 8 -27 18 -23 8 3 14 -1 14 -10 0 -10 6 -14 14 -11 7 3 31
            1 52 -3 22 -5 40 -5 42 -1 1 4 13 6 27 4 23 -5 23 -4 14 38 -10 41 -9 43 32
            85 l41 42 406 1 405 0 91 -44 c122 -58 196 -79 252 -70 51 7 108 51 118 90 l6
            25 250 0 250 0 113 -59 c115 -61 168 -78 212 -67 32 8 92 61 111 97 l15 29
            235 0 c227 0 237 -1 267 -22 18 -12 34 -25 37 -28 10 -11 135 -69 163 -76 15
            -3 38 -3 52 0 34 9 90 60 105 96 l12 30 231 0 230 0 96 -62 c228 -148 386
            -180 571 -115 78 28 184 94 234 146 l30 31 187 0 c203 0 219 4 219 55 0 49
            -20 55 -171 55 l-140 0 22 32 c12 18 23 34 24 36 1 1 9 0 18 -4 13 -5 14 -10
            6 -26 -6 -11 -9 -21 -7 -23 6 -6 188 38 188 45 0 4 -30 32 -67 64 -64 53 -68
            55 -75 35 -5 -12 -11 -19 -14 -17 -3 3 6 33 20 67 14 33 26 67 26 76 0 18 16
            20 23 3 3 -10 7 -10 17 -1 7 6 19 9 26 6 8 -3 17 2 20 11 4 11 19 16 45 16 46
            0 49 10 11 47 -16 15 -34 46 -40 68 -6 23 -27 59 -47 82 -31 36 -33 42 -19 54
            59 49 57 178 -4 232 -11 10 -38 21 -59 24 -32 4 -45 0 -70 -21 -18 -15 -35
            -36 -38 -46 -11 -35 -25 -21 -25 25 l0 45 -45 0 -45 0 0 -45 0 -45 -56 0 -56
            0 7 43 c11 76 80 201 148 269 63 64 110 102 153 126 22 11 24 11 24 -7 0 -11
            4 -22 9 -25 8 -5 137 132 130 138 -7 5 -166 46 -179 46 -8 0 -10 -8 -6 -26 6
            -21 3 -27 -16 -32 -13 -3 -63 -26 -113 -51 -117 -60 -236 -174 -284 -273 -32
            -64 -33 -71 -38 -225 -7 -180 2 -234 49 -331 36 -72 144 -194 207 -232 22 -14
            41 -28 41 -31 0 -4 -20 -34 -45 -68 l-45 -61 -370 0 c-334 0 -373 2 -397 17
            l-26 17 24 6 c24 6 24 8 27 138 1 73 1 132 -2 132 -2 0 -19 -15 -38 -34 -57
            -57 -137 -65 -204 -21 -45 29 -54 70 -54 236 l0 151 28 -7 c48 -12 88 -35 122
            -70 19 -19 38 -35 42 -35 4 0 8 70 8 155 0 85 -4 155 -9 155 -5 0 -16 -11 -25
            -25 -18 -27 -83 -64 -133 -76 l-33 -7 0 139 c0 149 10 189 58 232 46 42 156
            24 208 -34 9 -10 21 -19 26 -19 4 0 8 56 8 125 l0 125 -285 0 c-157 0 -285 -3
            -285 -6 0 -4 15 -24 34 -45 20 -21 37 -53 40 -71 15 -101 23 -901 9 -993 -5
            -39 -45 -105 -63 -105 -5 0 -15 6 -22 13 -7 8 -23 19 -35 25 -17 10 -21 19
            -18 45 3 17 7 71 11 120 l6 87 29 0 c29 0 29 1 23 43 -4 23 -11 52 -15 65 -16
            41 -11 52 21 52 l31 0 -16 30 c-14 27 -14 30 0 30 14 0 14 3 0 29 -9 19 -11
            32 -5 36 6 4 20 25 31 47 17 34 20 55 17 124 -3 72 -7 87 -33 125 -20 28 -49
            52 -82 69 -53 25 -65 43 -38 54 8 3 23 22 32 41 14 29 26 39 60 48 52 14 51
            28 -5 42 -23 5 -54 23 -68 38 -53 57 -113 58 -162 2 -18 -19 -43 -36 -63 -40
            -81 -16 -87 -28 -21 -40 28 -4 43 -14 56 -36 10 -16 29 -40 43 -53 l26 -24
            -38 -16 c-20 -9 -39 -16 -41 -16 -15 0 -68 -62 -89 -104 -37 -75 -34 -137 10
            -210 33 -55 34 -59 20 -86 -11 -22 -12 -29 -2 -33 9 -3 9 -9 0 -26 -18 -29
            -17 -31 13 -31 29 0 29 0 8 -122 -6 -37 -6 -38 25 -38 29 0 31 -2 32 -37 0
            -21 4 -73 7 -115 l8 -78 -63 -22 c-63 -23 -77 -36 -67 -63 8 -20 25 -19 123
            10 102 30 102 30 127 6 33 -31 62 -35 227 -32 l158 2 -18 -20 c-17 -20 -27
            -21 -296 -21 l-279 0 -57 35 c-76 47 -115 57 -164 44 -40 -10 -76 -42 -77 -66
            0 -10 -67 -13 -300 -13 -282 0 -301 1 -332 20 l-33 20 133 0 132 0 0 136 0
            136 -39 -35 c-47 -42 -104 -61 -148 -48 -96 28 -112 66 -113 264 l0 147 28 -6
            c57 -14 78 -26 125 -72 l47 -46 0 163 0 163 -41 -37 c-41 -37 -78 -56 -131
            -69 l-28 -6 0 141 c0 134 1 145 25 186 53 89 141 96 231 20 18 -15 36 -27 40
            -27 5 0 8 56 6 125 l-3 125 -385 0 -384 0 -1 -82 -2 -83 -11 80 -11 80 -42 3
            c-37 3 -43 6 -43 26 0 12 -9 32 -20 44 l-21 22 1849 0 c1778 0 1850 1 1865 18
            29 32 21 69 -20 91 -16 8 -667 11 -2598 11 l-2576 0 -24 -24z m109 -27 c30
            -24 34 -63 10 -98 -16 -22 -15 -24 37 -79 30 -31 57 -58 61 -60 4 -2 17 -11
            29 -21 l22 -17 -42 -33 -41 -33 -73 70 c-71 69 -73 71 -114 65 -56 -7 -93 15
            -93 57 0 37 31 70 65 70 20 0 25 5 25 24 0 33 37 76 64 76 13 0 35 -9 50 -21z
            m5087 -1 c24 -39 76 -38 -1880 -36 l-1876 3 -3 23 c-3 20 -8 22 -72 22 -63 0
            -71 -2 -86 -25 l-16 -25 -549 0 -550 0 -8 23 -8 22 566 5 c1050 9 4475 0 4482
            -12z m-3797 -14 c9 -8 16 -29 16 -45 0 -26 3 -29 30 -29 64 0 91 -70 45 -115
            -28 -29 -34 -30 -82 -10 l-37 16 -78 -78 -78 -77 -35 34 -35 34 79 81 c65 66
            77 83 71 100 -14 33 -11 51 11 79 24 30 69 35 93 10z m-140 -81 c5 -25 -3 -36
            -65 -95 l-70 -67 -42 27 c-23 15 -44 30 -47 33 -3 4 -48 21 -100 39 -77 27
            -115 34 -201 38 -140 6 -231 -14 -358 -79 l-96 -49 -64 64 c-55 55 -63 67 -57
            90 l6 26 544 0 544 0 6 -27z m-407 -68 c121 -29 237 -98 330 -197 53 -55 63
            -69 63 -78 0 -5 4 -10 8 -10 23 0 117 -249 100 -265 -7 -7 -187 41 -203 55 -8
            7 -24 33 -36 58 -13 26 -40 66 -62 88 -21 23 -44 49 -50 57 -21 28 -160 93
            -226 107 -52 11 -78 11 -134 2 -77 -14 -161 -46 -193 -74 -11 -10 -24 -18 -28
            -18 -19 0 -101 -102 -129 -162 -24 -51 -38 -69 -57 -73 -14 -4 -61 -17 -105
            -30 -43 -13 -82 -22 -84 -19 -11 11 21 123 54 189 46 93 50 98 125 175 72 74
            148 131 206 157 118 51 298 67 421 38z m4266 -25 c10 0 -45 -70 -55 -70 -5 0
            -8 7 -8 15 0 20 -2 19 -58 -9 -46 -23 -143 -102 -170 -138 -7 -9 -20 -25 -29
            -34 -19 -18 -23 -25 -76 -124 -24 -46 -36 -84 -41 -132 l-8 -68 81 0 81 0 0
            28 c0 36 14 56 34 49 10 -4 16 -19 16 -42 0 -32 2 -35 30 -35 18 0 30 5 30 13
            0 7 13 28 30 47 25 28 34 32 60 26 53 -10 80 -51 80 -120 0 -34 -6 -52 -26
            -76 -34 -40 -47 -27 -28 29 33 98 -30 136 -100 61 -22 -24 -46 -40 -59 -40
            -20 0 -22 -4 -19 -40 4 -37 2 -40 -22 -40 -24 0 -26 4 -26 40 l0 40 -81 0 -81
            0 7 -52 c17 -125 70 -238 161 -345 44 -51 45 -53 28 -77 l-16 -26 -44 31
            c-107 73 -196 195 -235 321 -24 76 -27 298 -5 350 49 116 64 143 110 190 28
            29 66 66 84 81 38 32 179 108 235 126 20 7 37 18 37 26 0 10 9 11 38 4 20 -5
            41 -9 45 -9z m-3519 -19 c4 -5 8 -33 11 -63 7 -72 25 -162 36 -179 8 -11 12
            -10 22 6 19 32 25 64 26 158 l1 87 91 0 c83 0 91 -2 84 -17 -16 -43 -32 -441
            -28 -693 2 -113 19 -435 25 -460 2 -12 -11 -15 -81 -15 l-84 0 -40 133 c-22
            72 -46 132 -52 132 -16 0 -27 -130 -18 -210 l6 -60 -103 0 c-101 0 -102 0 -96
            23 11 42 16 92 26 292 13 241 18 285 36 285 21 0 17 18 -6 25 -19 6 -20 15
            -20 261 l1 254 23 0 c12 0 33 11 46 25 24 25 83 35 94 16z m796 -61 c0 -38 -4
            -70 -9 -70 -5 0 -28 9 -52 20 -85 38 -153 18 -206 -61 -26 -40 -28 -51 -33
            -178 -3 -75 -3 -151 -1 -169 3 -31 5 -32 40 -28 53 7 115 27 122 39 4 5 14 7
            23 4 12 -5 16 -20 16 -59 0 -55 -14 -91 -27 -73 -13 17 -78 43 -127 50 l-46 7
            0 -168 c0 -193 11 -235 68 -275 43 -29 137 -38 180 -16 22 10 33 12 41 4 15
            -15 14 -120 -1 -135 -16 -16 -448 -17 -448 -2 0 6 6 23 14 38 36 72 45 327 25
            797 -9 239 -13 276 -34 328 -7 16 8 17 224 17 l231 0 0 -70z m1580 -5 l0 -74
            -50 26 c-94 49 -174 26 -222 -62 -22 -41 -27 -66 -33 -162 -4 -62 -4 -133 0
            -159 l7 -47 56 7 c32 4 75 18 99 32 l43 25 0 -97 0 -98 -27 26 c-37 34 -82 56
            -130 64 l-40 6 -6 -151 c-3 -91 -1 -166 5 -188 14 -52 54 -102 94 -119 42 -18
            122 -17 154 1 18 9 29 10 37 3 17 -13 17 -120 1 -136 -9 -9 -73 -12 -226 -12
            l-214 0 6 33 c21 100 34 275 30 387 -2 69 -6 253 -8 410 -3 241 -6 290 -20
            317 -9 18 -16 34 -16 38 0 3 104 5 230 5 l230 0 0 -75z m-2049 7 c10 -28 13
            -159 14 -537 0 -478 -1 -502 -19 -530 l-20 -30 -9 30 c-5 17 -10 217 -11 445
            -1 412 8 675 24 665 5 -3 14 -22 21 -43z m-527 -3 c9 -47 7 -475 -2 -463 -5 5
            -14 38 -21 74 -14 72 -68 195 -107 248 l-27 34 69 69 c38 38 71 69 75 69 4 0
            9 -14 13 -31z m-571 -120 c34 -11 78 -30 97 -42 50 -31 119 -96 136 -129 l15
            -29 -78 8 c-102 10 -507 10 -601 0 l-73 -8 17 28 c96 154 312 231 487 172z
            m2597 -269 c0 -24 -7 -43 -20 -55 -20 -18 -20 -17 -20 61 l1 79 19 -24 c12
            -14 20 -38 20 -61z m-2471 59 c119 -12 151 -21 151 -42 0 -9 -82 -12 -347 -12
            -192 0 -373 -2 -403 -5 -56 -5 -72 6 -51 38 18 28 438 41 650 21z m2251 -61
            c-1 -66 -2 -71 -15 -54 -25 33 -16 126 12 126 2 0 3 -33 3 -72z m-2153 -14
            c144 -21 357 -84 341 -100 -5 -5 -177 -33 -204 -34 -6 0 -17 13 -24 29 -6 16
            -24 34 -38 40 -67 28 -440 39 -672 20 -148 -12 -190 -24 -216 -64 -18 -27 -20
            -27 -91 -21 -40 3 -87 12 -105 19 l-32 13 36 17 c50 24 207 64 313 81 133 20
            554 21 692 0z m46 -80 c42 -10 51 -39 37 -122 -25 -152 -109 -264 -247 -329
            -141 -68 -300 -55 -439 35 -102 66 -161 157 -184 281 -20 111 -7 125 130 141
            85 10 660 5 703 -6z m3947 -19 c0 -5 -15 -15 -33 -22 -30 -11 -31 -12 -6 -12
            34 -1 40 -8 27 -37 -7 -15 -23 -26 -45 -30 -45 -9 -50 -21 -6 -16 33 4 34 3
            24 -16 -6 -11 -23 -30 -37 -41 -24 -19 -25 -21 -7 -21 11 0 26 -7 34 -16 10
            -13 10 -20 -4 -44 -11 -18 -14 -31 -7 -35 5 -3 10 3 10 14 0 12 4 21 9 21 5 0
            12 15 15 33 7 39 48 69 68 49 8 -8 5 -16 -13 -32 l-24 -21 23 11 c52 25 74
            -26 25 -55 -16 -9 -19 -13 -8 -10 49 17 55 17 55 2 0 -9 -9 -21 -20 -27 -11
            -6 -20 -18 -20 -26 0 -26 -23 5 -46 58 -19 48 -34 62 -34 32 0 -8 5 -24 11
            -36 12 -23 8 -30 -22 -32 -36 -2 -35 -26 0 -26 26 0 31 -4 31 -23 0 -13 -6
            -32 -14 -43 -14 -19 -15 -19 -40 5 -33 31 -34 20 -1 -13 28 -28 31 -49 11 -85
            l-13 -24 -18 26 c-9 15 -22 27 -27 27 -5 0 2 -14 16 -31 l26 -30 -20 -39 c-19
            -37 -40 -60 -40 -43 -1 13 -40 59 -40 47 0 -6 9 -21 20 -34 11 -13 20 -26 20
            -29 0 -13 -51 -81 -61 -81 -5 0 -16 15 -24 33 -17 39 -19 28 -3 -24 10 -36 9
            -41 -12 -64 -28 -30 -42 -28 -51 6 -5 18 -7 12 -8 -22 -1 -41 -5 -50 -35 -73
            -19 -14 -37 -26 -40 -26 -3 0 -7 15 -7 33 -2 30 -2 30 -8 -8 -5 -33 -13 -43
            -46 -62 -54 -31 -65 -29 -66 10 l-1 32 -9 -31 c-11 -38 -35 -60 -73 -67 -26
            -4 -28 -3 -23 22 3 14 9 34 12 44 4 9 3 17 -2 17 -5 0 -10 -6 -10 -14 0 -8 -5
            -28 -13 -45 -11 -29 -16 -31 -61 -31 -44 0 -49 2 -49 23 0 13 5 28 12 35 6 6
            9 14 6 17 -3 3 -15 -10 -26 -30 -22 -37 -35 -41 -76 -25 -28 10 -34 37 -13 59
            6 8 -2 3 -20 -9 -32 -23 -33 -23 -73 -5 -46 21 -49 28 -18 49 12 9 19 18 16
            22 -4 3 -17 -3 -29 -15 -13 -12 -28 -21 -33 -21 -17 1 -46 26 -46 40 0 7 8 19
            18 27 11 8 4 7 -20 -3 -30 -14 -40 -15 -53 -4 -19 16 -19 34 0 50 9 7 13 15
            10 18 -3 3 -16 -4 -28 -16 l-24 -22 -23 20 -23 20 23 25 c13 14 21 27 18 30
            -3 3 -13 -6 -22 -20 -18 -28 -42 -31 -70 -10 -17 13 -18 18 -7 42 l13 28 -24
            -22 c-26 -25 -54 -29 -78 -13 -28 19 17 40 85 40 53 0 67 -4 115 -37 66 -44
            73 -50 109 -85 16 -16 35 -28 43 -28 9 0 27 -9 41 -20 14 -11 31 -20 39 -20 7
            0 30 -9 51 -20 31 -17 55 -20 144 -19 121 0 202 11 212 27 4 6 24 19 46 29 50
            23 153 125 201 200 44 69 104 181 104 194 0 6 9 29 20 51 25 53 25 66 -1 94
            -18 19 -22 36 -23 106 -1 79 1 86 33 136 27 43 38 52 58 50 13 -2 23 -7 23
            -13z m-3650 -299 c-6 -132 -14 -243 -16 -245 -2 -2 -30 19 -62 46 l-59 49 39
            64 c46 77 85 194 94 287 14 136 16 35 4 -201z m-1190 231 c15 -8 27 -25 33
            -47 22 -90 39 -134 66 -173 38 -56 109 -120 160 -146 60 -31 54 -50 -31 -115
            l-72 -55 -30 17 c-16 9 -62 49 -102 89 -118 119 -183 267 -184 422 l0 33 68
            -7 c37 -4 78 -12 92 -18z m1158 -22 c7 -82 -70 -266 -152 -367 -48 -58 -143
            -138 -164 -138 -14 0 -112 67 -129 89 -23 27 -14 48 37 81 99 63 181 181 196
            281 4 24 10 51 14 59 13 23 70 39 135 37 l60 -2 3 -40z m3452 -15 l0 -40 40 0
            40 0 0 -49 c0 -35 7 -58 25 -85 l25 -36 -26 -66 c-26 -63 -27 -64 -46 -47 -11
            10 -42 50 -69 91 -46 69 -78 149 -93 235 l-7 37 56 0 55 0 0 -40z m-3011 -538
            c122 -3 123 -3 106 -22 -17 -18 -32 -20 -197 -20 -171 0 -178 1 -178 20 0 18
            7 20 56 20 53 0 55 1 48 23 -16 50 -23 94 -23 137 1 43 3 40 33 -55 l32 -100
            123 -3z m-1186 148 c27 -7 77 -11 117 -8 39 3 70 1 70 -3 0 -5 5 -9 10 -9 6 0
            10 6 10 14 0 18 42 29 52 13 14 -21 9 -27 -32 -33 -35 -6 -40 -10 -40 -33 0
            -16 8 -32 23 -40 l22 -15 -25 -7 c-36 -10 -213 -10 -229 0 -11 7 -6 13 19 26
            32 17 33 17 27 -5 -3 -14 -1 -20 6 -17 7 2 13 13 15 25 3 19 10 22 47 22 37 0
            44 -3 47 -22 2 -12 8 -23 14 -25 7 -2 10 6 7 22 -3 15 -1 25 6 25 6 0 11 7 11
            15 0 8 -9 15 -20 15 -11 0 -20 5 -20 10 0 6 -4 10 -10 10 -5 0 -10 -7 -10 -15
            0 -10 -10 -15 -30 -15 -20 0 -30 5 -30 15 0 8 -4 15 -10 15 -5 0 -10 -5 -10
            -11 0 -6 -14 -9 -32 -7 -25 2 -32 7 -30 21 2 9 -2 17 -8 17 -5 0 -10 -4 -10
            -10 0 -5 -9 -10 -20 -10 -14 0 -20 7 -20 21 0 14 5 19 18 16 9 -3 38 -10 65
            -17z m683 -32 c68 -55 76 -70 44 -90 -36 -23 -22 -28 70 -28 80 0 90 -2 90
            -18 0 -29 -29 -62 -56 -62 -13 0 -27 -7 -30 -15 -8 -19 -29 -19 -87 1 -40 13
            -46 19 -42 37 4 17 -11 39 -60 91 l-66 69 33 34 c17 18 34 33 36 33 3 0 33
            -23 68 -52z m-1088 9 l32 -33 -65 -64 c-63 -62 -64 -64 -58 -106 5 -37 2 -46
            -20 -68 -14 -14 -34 -26 -44 -26 -32 0 -63 29 -63 59 0 25 -5 30 -35 35 -61
            12 -83 77 -39 120 17 18 69 22 79 6 16 -26 55 -8 111 50 31 33 60 60 64 60 3
            0 20 -15 38 -33z m312 -47 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 21 16 26 39
            11 12 -8 12 -12 2 -25 -8 -9 -18 -16 -23 -16 -6 0 -23 -11 -40 -25 -16 -14
            -35 -25 -41 -25 -7 0 -18 -9 -25 -20 -7 -11 -17 -20 -23 -20 -5 0 -21 -10 -33
            -22 -45 -43 -149 -133 -162 -141 -8 -4 -14 -23 -14 -42 0 -46 -15 -52 -66 -24
            -32 17 -44 30 -44 46 0 31 16 29 29 -4 10 -25 10 -23 5 15 -5 40 -4 42 19 42
            17 0 28 -7 32 -21 5 -13 11 -17 16 -12 6 6 3 22 -8 41 -18 31 -18 32 4 53 29
            29 53 19 53 -22 0 -18 3 -29 7 -25 4 4 6 27 4 52 -4 72 37 102 57 42 10 -32
            10 -31 9 17 -2 48 -1 50 26 53 21 3 29 -2 36 -20 8 -19 10 -15 10 25 1 40 4
            48 18 45 10 -2 23 -14 30 -28 7 -14 13 -19 13 -12 0 7 -5 22 -11 33 -16 30 -4
            49 31 49 23 0 30 -4 30 -20z m375 -1 c-17 -12 -21 -18 -10 -14 42 15 55 17 72
            11 16 -7 15 -9 -7 -27 -24 -20 -24 -20 -2 -9 46 22 91 -7 60 -38 -9 -9 -4 -9
            20 0 42 16 63 -1 43 -35 -11 -18 -11 -20 0 -9 17 16 51 15 75 -2 15 -12 17
            -17 7 -27 -7 -7 -13 -17 -13 -23 0 -6 5 -5 12 2 17 17 65 15 71 -2 3 -8 -1
            -17 -10 -20 -9 -4 -13 -9 -9 -13 3 -3 15 2 26 12 18 16 25 17 60 6 44 -13 49
            -24 23 -55 -15 -18 -14 -18 8 2 32 28 92 31 82 5 -3 -10 -12 -25 -20 -34 -7
            -9 -10 -19 -7 -22 4 -4 15 8 24 26 13 24 25 33 50 35 57 6 65 -3 34 -43 -14
            -19 -22 -35 -18 -35 5 0 20 18 34 40 24 38 60 54 74 32 8 -14 -22 -51 -56 -68
            -65 -34 -153 -8 -356 104 -57 31 -116 63 -130 71 -15 8 -31 20 -35 28 -4 7
            -16 13 -26 13 -10 0 -24 7 -31 15 -7 8 -32 25 -56 37 -62 31 -60 58 5 58 l36
            0 -30 -21z m4183 -64 c-47 -9 -53 -8 -56 7 -2 9 -12 20 -23 23 -10 4 -19 13
            -19 22 0 12 7 14 29 10 21 -5 31 -2 35 10 6 13 14 9 47 -23 l40 -39 -53 -10z
            m-3843 -53 c-26 -6 -57 5 -109 38 l-49 32 29 23 29 24 58 -57 c42 -41 53 -58
            42 -60z m-941 85 l29 -24 -34 -23 c-19 -14 -35 -28 -37 -32 -4 -10 -92 -11
            -92 -1 0 8 92 103 100 103 3 0 18 -11 34 -23z m592 -42 c10 -24 -40 -90 -83
            -110 -60 -29 -158 -26 -215 8 -54 31 -85 72 -69 91 8 10 43 12 138 9 71 -3
            146 0 168 5 55 14 55 14 61 -3z m2155 -31 c38 -25 69 -49 69 -54 0 -4 10 -11
            23 -14 46 -12 51 -21 26 -50 -40 -47 -78 -28 -43 22 8 12 11 22 6 22 -5 0 -14
            -11 -20 -25 -13 -29 -19 -30 -47 -9 -19 14 -19 16 -2 47 l17 32 -23 -26 c-18
            -20 -28 -24 -45 -18 -26 10 -27 21 -6 57 17 27 17 27 -8 -2 -18 -22 -29 -27
            -46 -22 -23 8 -30 40 -12 51 6 3 10 12 10 18 0 7 -8 0 -18 -15 -9 -16 -22 -28
            -28 -28 -7 0 -19 -3 -28 -6 -21 -8 -20 12 2 35 43 45 89 41 173 -15z m-911 6
            c47 -24 103 -61 125 -84 9 -9 24 -16 34 -16 9 0 21 -4 27 -10 5 -5 56 -13 114
            -17 l105 -8 -46 -47 c-32 -34 -53 -48 -73 -48 -36 0 -44 25 -17 54 11 12 21
            26 21 30 0 5 -17 -10 -37 -32 l-38 -41 -37 15 c-44 19 -47 28 -15 56 22 20 22
            20 -13 0 -26 -15 -40 -18 -53 -11 -24 14 -21 26 11 43 15 8 23 15 18 16 -5 0
            -23 -9 -41 -20 l-33 -20 -23 20 -24 20 28 25 c33 29 23 33 -13 5 -31 -24 -53
            -25 -71 -4 -12 14 -9 20 16 40 17 13 26 24 21 24 -6 0 -22 -11 -36 -25 -34
            -33 -64 -25 -58 16 l4 28 -25 -18 c-25 -16 -61 -18 -61 -2 0 36 126 44 190 11z
            m-1590 -75 l34 -35 -107 0 -108 0 23 24 c56 58 109 62 158 11z m509 11 c15 -8
            33 -22 40 -30 12 -14 0 -16 -123 -16 l-136 0 27 30 c24 28 31 30 95 30 40 0
            81 -6 97 -14z m981 -9 l35 -22 -80 -2 c-301 -9 -545 -7 -545 5 0 6 8 12 19 12
            10 0 24 7 31 15 10 13 52 15 259 15 238 0 247 -1 281 -23z m920 0 l35 -22
            -305 -3 c-168 -1 -319 0 -337 3 -17 3 -42 14 -55 25 -23 19 -21 19 302 20 320
            0 326 0 360 -23z m871 6 c16 -10 29 -21 29 -25 0 -4 -135 -8 -300 -8 -252 0
            -306 3 -340 16 -22 9 -40 20 -40 25 0 5 136 9 311 9 276 0 314 -2 340 -17z
            m876 -8 l-28 -25 -292 0 c-271 1 -294 2 -314 19 -13 11 -23 22 -23 25 0 3 154
            6 343 6 l342 -1 -28 -24z m495 13 c13 -35 -2 -38 -168 -38 -167 0 -185 5 -152
            38 17 17 314 17 320 0z m-1957 -58 c3 -5 42 -10 86 -10 51 0 79 -4 79 -11 0
            -6 -18 -30 -40 -52 -31 -30 -44 -37 -52 -29 -9 9 -8 20 5 47 23 48 12 45 -12
            -4 -23 -45 -42 -55 -68 -36 -17 13 -17 14 1 47 l18 33 -28 -31 c-25 -27 -32
            -30 -51 -21 -27 12 -29 33 -6 59 17 19 58 24 68 8z m1328 -31 c-60 -28 -148
            -42 -213 -34 -52 6 -180 42 -180 51 0 2 98 4 218 3 l217 -1 -42 -19z"/>
            <path d="M1520 2388 c-102 -53 -106 -188 -8 -248 122 -74 266 63 200 190 -19
            36 -88 80 -127 80 -11 0 -41 -10 -65 -22z"/>
            <path d="M1935 2396 c-46 -21 -71 -47 -84 -89 -48 -144 130 -251 237 -144 31
            32 36 43 40 96 4 59 3 61 -34 100 -46 46 -108 61 -159 37z"/>
            <path d="M1770 2142 c-23 -7 -40 -33 -40 -63 0 -38 49 -59 85 -35 53 35 15
            117 -45 98z"/>
            <path d="M3600 3054 c0 -3 16 -21 36 -40 l37 -34 -5 -535 -5 -536 -31 -49 -31
            -50 159 0 c88 0 160 4 160 9 0 5 -7 14 -16 22 -35 29 -44 66 -44 184 l0 115
            33 0 c50 0 123 25 163 55 19 14 45 48 59 75 25 49 25 51 25 335 0 318 -1 324
            -72 392 -59 57 -88 63 -288 63 -99 0 -180 -3 -180 -6z m409 -52 c19 -9 48 -34
            65 -56 l31 -38 -1 -297 c-1 -340 -4 -352 -81 -401 -35 -22 -56 -28 -110 -29
            -37 -1 -72 -6 -78 -12 -6 -6 -9 -62 -8 -140 1 -101 5 -136 18 -155 9 -13 13
            -29 10 -34 -3 -6 -47 -10 -97 -10 l-90 0 6 33 c23 119 27 226 27 642 0 292 -4
            471 -10 488 l-11 27 148 0 c120 0 153 -3 181 -18z"/>
            <path d="M3830 2921 c0 -3 -1 -134 -3 -291 -2 -157 -1 -304 1 -327 4 -39 7
            -43 33 -43 16 0 47 7 69 16 31 13 44 26 60 60 18 41 19 61 13 272 -6 240 -9
            256 -56 287 -25 16 -117 37 -117 26z m90 -46 c16 -8 34 -24 40 -34 6 -12 10
            -111 10 -251 0 -140 -4 -239 -10 -251 -6 -10 -24 -26 -40 -34 -62 -32 -59 -44
            -62 285 -3 283 -2 300 15 300 10 0 31 -7 47 -15z"/>
            <path d="M5270 3033 c-60 -22 -123 -83 -152 -146 -23 -52 -23 -53 -23 -477 0
            -388 2 -428 18 -457 28 -52 76 -102 126 -131 62 -36 174 -38 236 -5 58 32 97
            72 123 126 19 42 22 63 22 180 0 72 -5 149 -11 170 l-10 37 -114 0 c-63 0
            -115 -2 -115 -5 0 -3 9 -22 20 -42 32 -61 22 -200 -17 -221 -23 -14 -52 -3
            -59 22 -2 11 -4 173 -2 359 3 322 4 339 22 353 26 18 32 18 56 -6 37 -37 21
            -193 -22 -221 -19 -12 8 -14 127 -9 l120 5 3 135 c2 80 -1 151 -8 173 -14 48
            -81 122 -134 149 -54 28 -148 33 -206 11z m184 -37 c47 -19 94 -64 117 -108
            16 -31 19 -59 19 -168 l0 -130 -85 0 -85 0 10 26 c14 36 12 144 -3 174 -7 13
            -25 31 -40 40 -24 13 -30 13 -54 0 -52 -29 -53 -42 -53 -405 0 -333 3 -366 34
            -387 21 -14 73 -8 89 10 33 37 46 176 22 235 -6 15 1 17 73 17 64 0 81 -3 86
            -16 3 -9 6 -77 6 -152 0 -156 -12 -194 -80 -256 -109 -99 -276 -64 -359 74
            -20 34 -21 46 -21 463 0 348 3 434 14 462 17 41 79 103 121 121 40 18 147 17
            189 0z"/>
            <path d="M3610 3006 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
            <path d="M5350 2786 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
            <path d="M4143 2265 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>
            <path d="M3270 1586 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
            </g>
            </svg>
            {/* <p className="font-bold text-xl text-black dark:text-white">Kaizoku Oni Orewa Naru !!</p> */}
          </div>
          <SearchBox/>
          <div className="mt-5">
            <section className="flex justify-around items-center">
              <p className="text-xl font-bold dark:text-gray-300">Bookmarks:</p>
              <button onClick={showDelete} className={` text-3xl flex justify-center items-center`}><BiEditAlt className={`${editMode?'text-red-500 animate-bounce':'text-black'} dark:text-gray-300`}/></button>
            </section>
            <section className="flex gap-5 w-full h-80 flex-wrap justify-center py-4 px-40 items-center">
              
              {linkItems.map((item,i)=>{
                return <div key={i} className="w-20 relative">
                <a className="flex flex-col justify-center items-center group p-1" href={item.url}> 
                <h1 className="dark:border dark:border-[#1b1b1b] dark:text-gray-300 dark:bg-[#2c2c2c] bg-[#d2d2d2] shadow-md shadow-gray-400 dark:shadow-[#1b1b1b] rounded-lg w-14 h-14 group-hover:scale-105 flex items-center justify-center text-4xl transition-all ease-linear duration-200">{item.title[0]}</h1>
                <p className="text-center dark:text-gray-300">{item.title}</p>
                </a>
                <GiCrossMark onClick={()=>handleDelete(i)} className={`${show?'hidden':'block'} absolute top-0 right-0 text-xl text-red-500`}/>
                <RiEdit2Fill onClick={()=>handleEdit(i)} className={`${show?'hidden':'block'} absolute top-5 right-0 text-xl text-black`}/>
              </div>

              })}
              
              {/* <div className="w-20 relative">
                <a className="flex flex-col justify-center items-center group p-1" href="#"> 
                <h1 className=" bg-[#d2d2d2] shadow-md shadow-gray-400 rounded-lg w-14 h-14 group-hover:scale-105 flex items-center justify-center text-4xl transition-all ease-linear duration-200">C</h1>
                <p className="text-center ">Chapter 1 Note</p>
                </a>
                <GiCrossMark onClick={handleDelete()} className={`${show?'hidden':'block'} absolute top-0 right-0 text-xl text-red-500`}/>
              </div>        */}
              
                      
            </section>
          </div>
          <div className={`${showBookmarkForm?'hidden':'flex'} absolute top-0 left-0 h-screen w-screen justify-center items-center bg-black bg-opacity-60`}>
            <AddBookmarkForm showBookmarkForm={showBookmarkForm} setShowBookmarkForm={setShowBookmarkForm} editingItem={editingItem} linkItem={linkItem} setLinkItem={setLinkItem} editing={editing} linkItems={linkItems} handleCancelClick={handleCancelClick} setLinkItems={setLinkItems} />
          </div>
          <button onClick={handleClick} className="text-6xl flex justify-center items-center absolute bottom-10 right-20"><IoIosAddCircleOutline className="dark:text-gray-300"/></button>
          <DateAndTime/>
        </div>
      </div>
    </div>
  )
}