import { FunctionComponent } from 'react';

interface loadingProps {
  children?: React.ReactNode;
}
const loading: FunctionComponent<loadingProps> = () => {
  return <div>LOading</div>;
};

export default loading;
