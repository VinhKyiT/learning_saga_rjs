export interface PaginationParams {
  _page: number;
  _limit: number;
  _total: number;
}

export interface ListResponse<T> {
  data: Array<T>;
  pagination: PaginationParams;
}

export interface ListParams {
  _page: number;
  _limit: number;
  _sort: string;
  _order: "asc" | "desc";
  [key: string]: any;
}
