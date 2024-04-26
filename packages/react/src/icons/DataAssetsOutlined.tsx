// This icon file is generated automatically.
import * as React from 'react';
import DataAssetsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DataAssetsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DataAssetsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DataAssetsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DataAssetsOutlined);

RefIcon.displayName = 'DataAssetsOutlined';

export default RefIcon;
