import {React,useEffect,useState} from "react";
import AddBookmarkForm from "./components/AddBookmarkForm";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { RiEdit2Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import strawhat from './assets/strawhat.svg'
import DateAndTime from "./components/DateAndTime";
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
    <div className="mx-20 h-screen">
      <Navbar/>
      <div className=" flex flex-col items-center justify-center ">
        <img className="h-32 w-32 " src={strawhat} alt="strawhat logo" />
        <p className="font-bold text-xl">Kaizoku Oni Orewa Naru !!</p>
      </div>
      <SearchBox/>
      <div className="">
        <section className="flex justify-around items-center">
          <p className="text-xl font-bold">Bookmarks:</p>
          <button onClick={showDelete} className={` text-3xl flex justify-center items-center`}><BiEditAlt className={`${editMode?'text-red-500':'text-black'}`}/></button>
        </section>
        <section className="flex gap-5 w-full h-80 flex-wrap justify-center py-4 px-40 items-center">
          
          {linkItems.map((item,i)=>{
            return <div key={i} className="w-20 relative">
            <a className="flex flex-col justify-center items-center group p-1" href={item.url}> 
            <h1 className=" bg-[#d2d2d2] shadow-md shadow-gray-400 rounded-lg w-14 h-14 group-hover:scale-105 flex items-center justify-center text-4xl transition-all ease-linear duration-200">{item.title[0]}</h1>
            <p className="text-center">{item.title}</p>
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
      <button onClick={handleClick} className="text-6xl flex justify-center items-center absolute bottom-10 right-20"><IoIosAddCircleOutline/></button>
      <DateAndTime/>
    </div>
  )
}