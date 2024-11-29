export interface IRubricTreeTypes {
  id: number;
  title: string;
  url: string;
  children: IRubricTreeTypes[];
  count: number;
  totalCount: number;
  level: number;
  isExpanded: boolean;
  isChecked: boolean;
}
