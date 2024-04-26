// This icon file is generated automatically.
import * as React from 'react';
import ListFilledSvg from '@sensoro-design/icons-svg/es/asn/ListFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ListFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ListFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ListFilled);

RefIcon.displayName = 'ListFilled';

export default RefIcon;
