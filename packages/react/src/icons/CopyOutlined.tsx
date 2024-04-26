// This icon file is generated automatically.
import * as React from 'react';
import CopyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CopyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CopyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CopyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CopyOutlined);

RefIcon.displayName = 'CopyOutlined';

export default RefIcon;
