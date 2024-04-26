// This icon file is generated automatically.
import * as React from 'react';
import UpgradeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UpgradeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UpgradeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UpgradeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UpgradeOutlined);

RefIcon.displayName = 'UpgradeOutlined';

export default RefIcon;
