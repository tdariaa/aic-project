import './Card.css';
import { useGetArtworksQuery } from '../../store/api/apiSlice';

let PostExcerpt = ({ post }: any) => {
  console.log(post);
  return (
    <div className='card'>
      <img
        src={`https://www.artic.edu/iiif/2/${post.image_id}/full/843,/0/default.jpg`}
        alt=''
        className='card__image'
      />
      <h2 className='card__title'>Sketches of Crouching and Standing Figures, a Pig, and a Hut at Water’s Edge</h2>
      <p className='card__title'>{post.artist_title}</p>
      <p className='card__title'>{post.artwork_type_title}</p>
      <button className='card__button card__button_like' />
      <button className='card__button card__button_info' />
    </div>
  );
};

export const Card = () => {
  const { data: posts, isLoading, isSuccess, isError, error } = useGetArtworksQuery('');
  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    console.log(posts.data);
    const data = posts.data.filter((item: any) => item.image_id != null);
    content = data.map((post: any) => <PostExcerpt key={post.id} post={post} />);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
};
