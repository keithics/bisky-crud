export type PaginationInput = {
  page: number;
  pageSize: number;
};

export type PaginationResult = {
  limit: number;
  offset: number;
};

export const toPagination = ({ page, pageSize }: PaginationInput): PaginationResult => ({
  limit: pageSize,
  offset: (page - 1) * pageSize,
});
