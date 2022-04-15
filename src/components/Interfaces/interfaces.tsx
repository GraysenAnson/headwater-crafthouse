
export interface ItemProp {
  item: InvItem[];
}

export interface InvItem {
  ID: number;
  Arr_ID: number;
  Order: number;
  Category: string;
  beer_name: string;
  business_name: string;
  State: string;
  ABV: number | null;
  IBU: number | null;
  Price: number;
  oz: number;
  Available: string;
  Remaining: string;
  Growler_Fill: string;
  BOTTLE: string;
  CAN: string;
  Image: string;
};
