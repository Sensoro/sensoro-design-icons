// This icon file is generated automatically.
import * as React from 'react';
import OriginalSizeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OriginalSizeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OriginalSizeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OriginalSizeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OriginalSizeOutlined);

RefIcon.displayName = 'OriginalSizeOutlined';

export default RefIcon;
