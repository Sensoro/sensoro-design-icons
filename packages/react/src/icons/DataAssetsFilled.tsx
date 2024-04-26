// This icon file is generated automatically.
import * as React from 'react';
import DataAssetsFilledSvg from '@sensoro-design/icons-svg/es/asn/DataAssetsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DataAssetsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DataAssetsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DataAssetsFilled);

RefIcon.displayName = 'DataAssetsFilled';

export default RefIcon;
