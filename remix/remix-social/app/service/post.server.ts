import { db } from './db.server';
export type { Post } from '@prisma/client';

export const getPost = () => db.post.findMany();
