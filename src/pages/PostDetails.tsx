import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentsProps } from '../@types/IComments';
import { PostProps } from '../@types/IPost';
import { CardComment } from '../components/CardComment';
import { api } from '../services/api';

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostProps>();
  const [comments, setComments] = useState<CommentsProps[]>([]);
  
const fetchPost = async () => {
    const response = await api.get(`/posts/${id}`);
    setPost(response.data);
  };

  const fetchComments = async () => {
    const response = await api.get(`/posts/${id}/comments`)
    setComments(response.data)
    console.log(response.data);
        
}  

  useEffect(() => {
    fetchPost();
    fetchComments()
  }, []);
  return (
    <>
      <section>
        <div className='flex flex-col gap-10 max-w-[900px] w-full mx-auto py-8 px-5'>
          <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className='text-yellow-400 text-2xl font-semibold'>
              {post?.title}
            </h2>
            <p className='text-gray-200 text-xl'>{post?.body}</p>
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <h2 className='text-gray-200 my-5 text-2xl font-semibold'>Comments</h2>          
        <div className='flex flex-col items-center justify-center gap-4'>
{comments.map((comment) => (
            <CardComment
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </div>
      </section>
    </>
  );
};
