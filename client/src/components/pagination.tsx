import {Pagination} from "@heroui/react";

interface IProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

export default function PaginationHeroui( { total, page, onChange }: IProps) {

  if (total <= 1) return null;

  return <Pagination loop showControls color="primary" initialPage={1} total={total} page={page} onChange={onChange} />;
}
