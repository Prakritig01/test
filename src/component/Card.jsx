import  { useState } from 'react'

const Card = ({cardInfo, card, handleLike, addComment}) => {
    console.log("cardInfo", cardInfo);

    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            addComment(cardInfo.id, {id: 1, comment});
            setComment("");
        }
    }

  return (
    <div className='bg-white shadow-md rounded-lg p-5 w-80 h-96 m-4'>
        <div className='flex flex-col items-center mb-4'>
            <img src={cardInfo.userImage} alt="user" className='w-40 h-30' />
            <h2 className='text-lg font-semibold'>{cardInfo.username}</h2>
        </div>

        {/* //islike? */}
        <div className="button">
            <button onClick={()=> handleLike(cardInfo.id)}>{cardInfo.isLike ? "❤️" : "🤍" }</button>
        </div>
        {cardInfo.caption}

        <div className="comment-field">
           
           <form  className='flex  items-center justify-center gap-2'>
                <input type="text" value={comment} onChange={handleCommentChange} placeholder='Add a comment' className='border-2 border-gray-300 rounded-lg p-2 w-full' />
                <button onClick={handleCommentSubmit} className='bg-gray-200 text-white rounded-lg p-2 mt-2'>post</button>
           </form>

        </div>

        {cardInfo.comment && <div className="comments mt-4">
            {cardInfo.comment.map((c, index) => (
                <div key={index} className='flex items-center gap-2'>
                    <p className='text-gray-600'>{c.comment}</p>
                </div>
            ))}
        </div>}

        
       

      
    </div>
  )
}

export default Card;
