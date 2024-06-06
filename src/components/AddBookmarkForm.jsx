import {React,useState,useEffect} from "react"; 

const AddBookmarkForm = ({linkItems,setLinkItems,handleCancelClick,editing,linkItem,setLinkItem,editingItem,showBookmarkForm,setShowBookmarkForm}) => {
        
        const handleInputChange = (e)=>{
            setLinkItem({...linkItem,[e.target.name]: e.target.value}) 
        }
        // useEffect(()=>{
        //     console.log(linkItem);
        //   },[linkItem])
        
        const handleAddBookmarkList = (e) => {
            e.preventDefault();
            if(editing){
                setLinkItems(linkItems.map((items,i)=>{
                    if(editingItem === i){
                        return linkItem
                    }
                    return items;
                }))
                setShowBookmarkForm(true)
            }
            else{
                setLinkItems([...linkItems,linkItem])
                setLinkItem({url: 'https://',title: ''})
                setShowBookmarkForm(true)
            }
        }

      return (
        <div className='w-96 border border-white py-5 px-3 rounded-xl bg-white '>
            <form action="">
                <label className='font-bold text-lg text-black'>URL: </label>
                <input onChange={handleInputChange} value={linkItem.url} className='bg-gray-300 w-full px-3 py-2 focus:outline-none rounded-full' type="text" name='url'/>
                <label className='font-bold text-lg text-black'>Name: </label>
                <input onChange={handleInputChange} value={linkItem.title} className='mb-2 bg-gray-300 w-full px-3 py-2 focus:outline-none rounded-full' type="text" name='title'/>
                <div className='flex justify-center gap-4 mt-4 items-center'>
                    {
                        editing?<button onClick={handleAddBookmarkList} type="submit" className='border border-black bg-black text-white px-5 py-1 rounded-full'>Edit</button>:<button onClick={handleAddBookmarkList} type="submit" className='border border-black bg-black text-white px-5 py-1 rounded-full'>Add</button>
                    }
                    <button onClick={handleCancelClick} type="button" className='border border-black bg-black text-white px-5 py-1 rounded-full'>cancel</button>
                </div>
            </form>
        </div>
      )
}

export default AddBookmarkForm