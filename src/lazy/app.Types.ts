export type usersType = {
    id: number;
    name: string;
    email: string;
  };
  
export  type postsType = {
    userId: number;
    title: string;
    body: string;
  };
  
export  type todosType = {
    userId: number;
    title: string;
    completed: boolean;
  };
  
export  type albumsType = {
    userId: number;
    title: string;
  };