// This icon file is generated automatically.
import * as React from 'react';
import ManholeCoverOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ManholeCoverOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ManholeCoverOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ManholeCoverOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ManholeCoverOutlined);

RefIcon.displayName = 'ManholeCoverOutlined';

export default RefIcon;
