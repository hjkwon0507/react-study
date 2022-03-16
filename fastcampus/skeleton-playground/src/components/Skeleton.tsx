
interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string;
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC = () => {
  return (
    <></>
  )
}

export default Skeleton;