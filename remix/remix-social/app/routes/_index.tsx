import { json, type LoaderFunction, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { Post } from '~/service/post.server';
import { getPost } from '~/service/post.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPost() };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
