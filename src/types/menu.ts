export interface MenuItem {
  id: string;
  name: string;
  category: "starters" | "main-course" | "breads" | "biryani" | "indo-chinese" | "desserts" | "beverages";
  categoryName: string;
  desc: string;
  price: string;
  priceNum: number;
  isVeg: boolean;
  spiceLevel?: "Mild" | "Medium" | "Spicy" | "Chulha Fire";
  highlight?: boolean;
  chulhaSpecial?: boolean;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
