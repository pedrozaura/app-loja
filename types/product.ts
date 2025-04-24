export type Product = {
  id: number;
  idCategory: number;
  image: string; // ✅ Este campo precisa existir!
  title: string;
  description: string;
  price: number;
};
