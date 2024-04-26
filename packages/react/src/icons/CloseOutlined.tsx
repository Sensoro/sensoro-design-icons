// This icon file is generated automatically.
import * as React from 'react';
import CloseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CloseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloseOutlined);

RefIcon.displayName = 'CloseOutlined';

export default RefIcon;
