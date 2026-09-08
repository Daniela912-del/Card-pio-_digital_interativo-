export interface MenuItem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nome: 'Hambúrguer Artesanal',
    descricao:
      'Pão brioche selado na manteiga, blend de costela 150g, queijo cheddar derretido e molho da casa.',
    preco: 28.9,
    categoria: 'Lanches',
    imagem:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    nome: 'Café Especial da Casa',
    descricao:
      'Café aromático com notas de chocolate, servido em temperatura ideal e com espuma cremosa.',
    preco: 16,
    categoria: 'Bebidas',
    imagem:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    nome: 'Suco Natural de Laranja',
    descricao:
      'Suco 100% natural da fruta, espremido na hora e muito gelado. Copo de 400ml.',
    preco: 8.5,
    categoria: 'Bebidas',
    imagem:
      'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
  },
];