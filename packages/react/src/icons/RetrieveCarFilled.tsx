// This icon file is generated automatically.
import * as React from 'react';
import RetrieveCarFilledSvg from '@sensoro-design/icons-svg/es/asn/RetrieveCarFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RetrieveCarFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RetrieveCarFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RetrieveCarFilled);

RefIcon.displayName = 'RetrieveCarFilled';

export default RefIcon;
