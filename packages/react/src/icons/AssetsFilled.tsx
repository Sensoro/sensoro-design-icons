// This icon file is generated automatically.
import * as React from 'react';
import AssetsFilledSvg from '@sensoro-design/icons-svg/es/asn/AssetsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AssetsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AssetsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AssetsFilled);

RefIcon.displayName = 'AssetsFilled';

export default RefIcon;
