type MyButtonProps = {
    count: number;
    onClick: () => void;
  };

  type SquareProps = {
    value: null;
    onSquareClick: () => void;
}
type SectionProps ={
  children: any;
  level: number;
}

type Props = {
  children: React.ReactNode;
}