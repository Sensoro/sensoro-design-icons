// This icon file is generated automatically.
import * as React from 'react';
import OffFlashOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OffFlashOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OffFlashOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OffFlashOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OffFlashOutlined);

RefIcon.displayName = 'OffFlashOutlined';

export default RefIcon;
