export interface Product {
  id: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: false;
  Category: Category;
}

export interface Category {
  id: number;
  CategoryName: string;
  Description: string;
}
