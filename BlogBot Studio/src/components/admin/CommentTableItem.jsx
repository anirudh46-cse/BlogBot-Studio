import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({comment, fetchComments}) => {
    const {blog, createdAt, _id} = comment;
    const BlogDate = new Date(createdAt);

     const {axios} = useAppContext()

     const approveComment = async ()=> {
      try{ 
        const confirm = window.confirm("Approve this comment? ")
        if(!confirm) return;
        const {data} = await axios.post('/api/admin/approve-comment', {id:_id})
        if(data.success){
          toast.success(data.message)
          fetchComments()
        }else{
          toast.error(data.message)
        }

      }catch(error){
        const message = error.response?.data?.message || error.message;

        toast.error(error.message)

      }
     }


     const deleteComment = async ()=> {
      try{
        const confirm = window.confirm('Are You Sure To Delete This Comment ?');
        if(!confirm) return;
        const {data} = await axios.post('/api/admin/delete-comment', {id:_id})
        if(data.success){
          toast.success(data.message)
          fetchComments()
        }else{
          toast.error(data.message)
        }

      }catch(error){
        const message = error.response?.data?.message || error.message;
        console.error('Error deleting comment:', message);
        if (error.response?.status === 404) {
          toast.error('Comment not found');
        }
        else if (error.response?.status === 500) {
          toast.error('Internal server error');
        } else {
          toast.error('An unexpected error occurred');
        }
        toast.error(error.message)

      }
     }



       return (
    <tr className='border-y hover:bg-gray-50 transition-all'>

   <td className='px-6 py-4'>
    <b className='font-medium text-gray-600'>Blog</b>: {blog.title}
    <br />
    <br />
    <b className='font-medium text-gray-600'>Name</b>: {comment.author}
    <br />
    <b className='font-medium text-gray-600'>Comment</b>: {comment.content} 

    </td> 
    <td className='px-6 py-4 max-sm:hidden'> {BlogDate.toLocaleDateString()}
        </td>  
        <td className='px-6 py-4'>
            <div className='inline-flex items-center gap-4'>
                {!comment.isApproved ? <img onClick={approveComment} src={assets.tick_icon} className='w-5 hover:scale-110 transition-all cursor-pointer'/> : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>
                }
                <img  onClick={deleteComment} src={assets.bin_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointer' />
            </div></td>   
    </tr>
  )
}

export default CommentTableItem
